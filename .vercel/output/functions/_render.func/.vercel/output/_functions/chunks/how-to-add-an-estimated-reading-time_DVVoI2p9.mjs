const id = "how-to-add-an-estimated-reading-time.md";
						const collection = "blog";
						const slug = "how-to-add-estimated-reading-time";
						const body = "\nAs the [Astro docs](https://docs.astro.build/en/recipes/reading-time/) say, we can use remark plugin to add a reading time property in our frontmatter. However, for some reason, we can't add this feature by following what stated in Astro docs. Therefore, to achieve this, we have to tweak a little bit. This post will demonstrate how we can do that.\n\n## Table of contents\n\n## Add reading time in PostDetails\n\nStep (1) Install required dependencies.\n\n```bash\nnpm install reading-time mdast-util-to-string\n```\n\nStep (2) Create `remark-reading-time.mjs` file under `utils` directory\n\n```js\nimport getReadingTime from \"reading-time\";\nimport { toString } from \"mdast-util-to-string\";\n\nexport function remarkReadingTime() {\n  return function (tree, { data }) {\n    const textOnPage = toString(tree);\n    const readingTime = getReadingTime(textOnPage);\n    data.astro.frontmatter.readingTime = readingTime.text;\n  };\n}\n```\n\nStep (3) Add the plugin to `astro.config.ts`\n\n```js\nimport { remarkReadingTime } from \"./src/utils/remark-reading-time.mjs\"; // make sure your relative path is correct\n\n// https://astro.build/config\nexport default defineConfig({\n  site: SITE.website,\n  integrations: [\n    // other integrations\n  ],\n  markdown: {\n    remarkPlugins: [\n      remarkToc,\n      remarkReadingTime, // 👈🏻 our plugin\n      [\n        remarkCollapse,\n        {\n          test: \"Table of contents\",\n        },\n      ],\n    ],\n    // other config\n  },\n  // other config\n});\n```\n\nStep (4) Add `readingTime` to blog schema (`src/content/config.ts`)\n\n```ts\nimport { SITE } from \"@config\";\nimport { defineCollection, z } from \"astro:content\";\n\nconst blog = defineCollection({\n  type: \"content\",\n  schema: ({ image }) =>\n    z.object({\n      // others...\n      canonicalURL: z.string().optional(),\n      readingTime: z.string().optional(), // 👈🏻 readingTime frontmatter\n    }),\n});\n\nexport const collections = { blog };\n```\n\nStep (5) Create a new file called `getPostsWithRT.ts` under `src/utils` directory.\n\n```ts\nimport type { MarkdownInstance } from \"astro\";\nimport type { CollectionEntry } from \"astro:content\";\nimport { slugifyStr } from \"./slugify\";\n\nexport const getReadingTime = async () => {\n  // Get all posts using glob. This is to get the updated frontmatter\n  const globPosts = import.meta.glob(\"../content/blog/*.md\") as Promise<\n    CollectionEntry<\"blog\">[\"data\"][]\n  >;\n\n  // Then, set those frontmatter value in a JS Map with key value pair\n  const mapFrontmatter = new Map();\n  const globPostsValues = Object.values(globPosts);\n  await Promise.all(\n    globPostsValues.map(async globPost => {\n      const { frontmatter } = await globPost();\n      mapFrontmatter.set(\n        slugifyStr(frontmatter.title),\n        frontmatter.readingTime\n      );\n    })\n  );\n\n  return mapFrontmatter;\n};\n\nconst getPostsWithRT = async (posts: CollectionEntry<\"blog\">[]) => {\n  const mapFrontmatter = await getReadingTime();\n  return posts.map(post => {\n    post.data.readingTime = mapFrontmatter.get(slugifyStr(post.data.title));\n    return post;\n  });\n};\n\nexport default getPostsWithRT;\n```\n\nStep (6) Refactor `getStaticPaths` of `/src/pages/posts/[slug].astro` as the following\n\n```ts\n---\n// other imports\nimport getPostsWithRT from \"@utils/getPostsWithRT\";\n\nexport interface Props {\n  post: CollectionEntry<\"blog\">;\n}\n\nexport async function getStaticPaths() {\n  const posts = await getCollection(\"blog\", ({ data }) => !data.draft);\n\n  const postsWithRT = await getPostsWithRT(posts); // replace reading time logic with this func\n\n   const postResult = postsWithRT.map(post => ({ // make sure to replace posts with postsWithRT\n    params: { slug: post.slug },\n    props: { post },\n  }));\n\n// other codes\n```\n\nStep (7) Refactor `PostDetails.astro` like this. Now you can access and display `readingTime` in `PostDetails.astro`\n\n```ts\n---\n// imports\n\nexport interface Props {\n  post: CollectionEntry<\"blog\">;\n}\n\nconst { post } = Astro.props;\n\nconst {\n  title,\n  author,\n  description,\n  ogImage,\n  readingTime, // we can now directly access readingTime from frontmatter\n  pubDatetime,\n  modDatetime,\n  tags } = post.data;\n\n// other codes\n---\n```\n\n## Access reading time outside of PostDetails (optional)\n\nBy following the previous steps, you can now access `readingTime` frontmatter property in you post details page. Sometimes, this is exactly what you want. If so, you can skip to the next section. However, if you want to display \"estimated reading time\" in index, posts, and technically everywhere, you need to do the following extra steps.\n\nStep (1) Update `utils/getSortedPosts.ts` as the following\n\n```ts\nimport type { CollectionEntry } from \"astro:content\";\nimport getPostsWithRT from \"./getPostsWithRT\";\n\nconst getSortedPosts = async (posts: CollectionEntry<\"blog\">[]) => {\n  // make sure that this func is async\n  const postsWithRT = await getPostsWithRT(posts); // add reading time\n  return postsWithRT\n    .filter(({ data }) => !data.draft)\n    .sort(\n      (a, b) =>\n        Math.floor(\n          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000\n        ) -\n        Math.floor(\n          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000\n        )\n    );\n};\n\nexport default getSortedPosts;\n```\n\nStep (2) Make sure to refactor every file which uses `getSortedPosts` function. You can simply add `await` keyword in front of `getSortedPosts` function.\n\nFiles that use `getSortedPosts` function are as follow\n\n- src/pages/index.astro\n- src/pages/posts/index.astro\n- src/pages/rss.xml.ts\n- src/pages/posts/index.astro\n- src/pages/posts/[slug].astro\n- src/utils/getPostsByTag.ts\n\nAll you have to do is like this\n\n```ts\nconst sortedPosts = getSortedPosts(posts); // old code ❌\nconst sortedPosts = await getSortedPosts(posts); // new code ✅\n```\n\nNow you can access `readingTime` in other places besides `PostDetails`\n\n## Displaying reading time (optional)\n\nSince you can now access `readingTime` in your post details (or everywhere if you do the above section), it's up to you to display `readingTime` wherever you want.\n\nBut in this section, I'm gonna show you how I would display `readingTime` in my components. This is optional. You can ignore this section if you want.\n\nStep (1) Update `Datetime` component to display `readingTime`\n\n```tsx\nimport { LOCALE } from \"@config\";\n\nexport interface Props {\n  datetime: string | Date;\n  size?: \"sm\" | \"lg\";\n  className?: string;\n  readingTime?: string; // new type\n}\n\nexport default function Datetime({\n  datetime,\n  size = \"sm\",\n  className,\n  readingTime, // new prop\n}: Props) {\n  return (\n    // other codes\n    <span className={`italic ${size === \"sm\" ? \"text-sm\" : \"text-base\"}`}>\n      <FormattedDatetime pubDatetime={pubDatetime} modDatetime={modDatetime} />\n      <span> ({readingTime})</span> {/* display reading time */}\n    </span>\n    // other codes\n  );\n}\n```\n\nStep (2) Then, pass `readingTime` props from its parent component.\n\nfile: Card.tsx\n\n```ts\nexport default function Card({ href, frontmatter, secHeading = true }: Props) {\n  const { title, pubDatetime, modDatetime description, readingTime } = frontmatter;\n  return (\n    ...\n    <Datetime\n      pubDatetime={pubDatetime}\n      modDatetime={modDatetime}\n      readingTime={readingTime}\n    />\n    ...\n  );\n}\n```\n\nfile: PostDetails.tsx\n\n```jsx\n// Other Codes\n<main id=\"main-content\">\n  <h1 class=\"post-title\">{title}</h1>\n  <Datetime\n    pubDatetime={pubDatetime}\n    modDatetime={modDatetime}\n    size=\"lg\"\n    className=\"my-2\"\n    readingTime={readingTime}\n  />\n  {/* Other Codes */}\n</main>\n// Other Codes\n```\n\n## Conclusion\n\nBy following the provided steps and tweaks, you can now incorporate this useful feature into your content. I hope this post helps you adding `readingTime` in your blog. AstroPaper might include reading time by default in future releases. 🤷🏻‍♂️\n\nKyay Zuu for Reading 🙏🏻\n";
						const data = {author:"Sat Naing",pubDatetime:new Date(1689934266130),modDatetime:new Date(1704293605000),title:"How to add an estimated reading time in AstroPaper",featured:false,draft:true,tags:["FAQ"],description:"How you can add an 'Estimated Reading time' in your blog posts of AstroPaper."};
						const _internal = {
							type: 'content',
							filePath: "C:/Workspaces/Cloned/astro-ublog/src/content/blog/how-to-add-an-estimated-reading-time.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
