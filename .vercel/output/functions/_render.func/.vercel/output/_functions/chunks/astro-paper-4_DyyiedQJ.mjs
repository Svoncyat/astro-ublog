const id = "astro-paper-4.md";
						const collection = "blog";
						const slug = "astro-paper-v4";
						const body = "\nHello everyone! Wishing you a happy New Year 🎉 and all the best for 2024! We're excited to announce the release of AstroPaper v4, a significant update that introduces a range of new features, improvements, and bug fixes to elevate your blogging experience. A big thank you to all the contributors for their valuable input and efforts in making version 4 possible!\n\n![AstroPaper v4](@assets/images/AstroPaper-v4.png)\n\n## Table of contents\n\n## Major Changes\n\n### Upgrade to Astro v4 [#202](https://github.com/satnaing/astro-paper/pull/202)\n\nAstroPaper now leverages the power and capabilities of Astro v4. However, it’s a subtle upgrade and won’t break most Astro users.\n\n![Astro v4](https://astro.build/_astro/header-astro-4.GLp8HjfV.webp)\n\n### Replace `postSlug` with Astro Content `slug` [#197](https://github.com/satnaing/astro-paper/pull/197)\n\nThe `postSlug` in the blog content schema is no longer available in AstroPaper v4. Initially Astro doesn't have a `slug` mechanism and thus we have to figure it out on our own. Since Astro v3, it supports content collection and slug features. Now, we believe it's time to adopt Astro's out-of-the-box `slug` feature.\n\n**_file: src/content/blog/astro-paper-4.md_**\n\n```bash\n---\nauthor: Sat Naing\npubDatetime: 2024-01-01T04:35:33.428Z\ntitle: AstroPaper 4.0\nslug: \"astro-paper-v4\" # if slug is not specified, it will be 'astro-paper-4' (file name).\n# slug: \"\" ❌ cannot be an empty string\n---\n```\n\nThe behavior of the `slug` is slightly different now. In the previous versions of AstroPaper, if the `postSlug` is not specified in a blog post (markdown file), the title of that blog post would be slugified and used as the `slug`. However, in AstroPaper v4, if the `slug` field is not specified, the markdown file name will be used as the `slug`. One thing to keep in mind is that the `slug` field can be omitted, but it cannot be an empty string (slug: \"\" ❌).\n\nIf you're upgrading AstroPaper from v3 to v4, make sure to replace `postSlug` in your `src/content/blog/*.md` files with `slug`.\n\n## New Features\n\n### Add code-snippets for content creation [#206](https://github.com/satnaing/astro-paper/pull/206)\n\nAstroPaper now includes VSCode snippets for new blog posts, eliminating the need for manual copy/pasting of the frontmatter and content structure (table of contents, heading, excerpt, etc.).\n\nRead more about VSCode Snippets [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets#:~:text=In%20Visual%20Studio%20Code%2C%20snippets,Snippet%20in%20the%20Command%20Palette).\n\n<video autoplay muted=\"muted\" controls plays-inline=\"true\" class=\"border border-skin-line\">\n  <source src=\"https://github.com/satnaing/astro-paper/assets/53733092/136f1903-bade-40a2-b6bb-285a3c726350\" type=\"video/mp4\">\n</video>\n\n### Add Modified Datetime in Blog Posts [#195](https://github.com/satnaing/astro-paper/pull/195)\n\nKeep readers informed about the latest updates by displaying the modified datetime in blog posts. This not only instills user trust in the freshness of the articles but also contributes to improved SEO for the blog.\n\n![Last Modified Date feature in AstroPaper](https://github.com/satnaing/astro-paper/assets/53733092/cc89585e-148e-444d-9da1-0d496e867175)\n\nYou can add a `modDatetime` to your blog post if you've made modifications. Now, the sorting behavior of the posts is slightly different. All posts are sorted by both `pubDatetime` and `modDatetime`. If a post has both a `pubDatetime` and `modDatetime`, its sorting position will be determined by the `modDatetime`. If not, only `pubDatetime` will be considered to determine the post's sorting order.\n\n### Implement Back-to-Top Button [#188](https://github.com/satnaing/astro-paper/pull/188)\n\nEnhance user navigation on your blog detail post with the newly implemented back-to-top button.\n\n![Back to top button in AstroPaper](https://github.com/satnaing/astro-paper/assets/53733092/79854957-7877-4f19-936e-ad994b772074)\n\n### Add Pagination in Tag Posts [#201](https://github.com/satnaing/astro-paper/pull/201)\n\nImprove content organization and navigation with the addition of pagination in tag posts, making it easier for users to explore related content. This ensures that if a tag has many posts, readers won't be overwhelmed by all the tag-related posts.\n\n<video autoplay loop=\"loop\" muted=\"muted\" plays-inline=\"true\" class=\"border border-skin-line\">\n  <source src=\"https://github.com/satnaing/astro-paper/assets/53733092/9bad87f5-dcf5-4b79-b67a-d6c7244cd616\" type=\"video/mp4\">\n</video>\n\n### Dynamically Generate robots.txt [#130](https://github.com/satnaing/astro-paper/pull/130)\n\nAstroPaper v4 now dynamically generates the robots.txt file, giving you more control over search engine indexing and web crawling. Besides, sitemap URL will also be added inside `robot.txt` file.\n\n### Add Docker-Compose File [#174](https://github.com/satnaing/astro-paper/pull/174)\n\nManaging your AstroPaper environment is now easier than ever with the addition of a Docker-Compose file, simplifying deployment and configuration.\n\n## Refactoring & Bug Fixes\n\n### Replace Slugified Title with Unslugified Tag Name [#198](https://github.com/satnaing/astro-paper/pull/198)\n\nTo improve clarity, user experience and SEO, titles (`Tag: some-tag`) in tag page are no longer slugified (`Tag: Some Tag`).\n\n![Unslugified Tag Names](https://github.com/satnaing/astro-paper/assets/53733092/2fe90d6e-ec52-467b-9c44-95009b3ae0b7)\n\n### Implement 100svh for Min-Height ([79d569d](https://github.com/satnaing/astro-paper/commit/79d569d053036f2113519f41b0d257523d035b76))\n\nWe've updated the min-height on the body to use 100svh, offering a better UX for mobile users.\n\n### Update Site URL as Single Source of Truth [#143](https://github.com/satnaing/astro-paper/pull/143)\n\nThe site URL is now a single source of truth, streamlining configuration and avoiding inconsistencies. Read more at this [PR](https://github.com/satnaing/astro-paper/pull/143) and its related issue(s).\n\n### Solve Invisible Text Code Block Issue in Light Mode [#163](https://github.com/satnaing/astro-paper/pull/163)\n\nWe've fixed the invisible text code block issue in light mode.\n\n### Decode Unicode Tag Characters in Breadcrumb [#175](https://github.com/satnaing/astro-paper/pull/175)\n\nThe last part of Tag in the breadcrumb is now decoded, making non-English Unicode characters display better.\n\n### Update LOCALE Config to Cover Overall Locales ([cd02b04](https://github.com/satnaing/astro-paper/commit/cd02b047d2b5e3b4a2940c0ff30568cdebcec0b8))\n\nThe LOCALE configuration has been updated to cover a broader range of locales, catering to a more diverse audience.\n\n## Outtro\n\nWe believe these updates will significantly elevate your AstroPaper experience. Thank you to everyone who contributed, solved issues, and gave stars to AstroPaper. We look forward to seeing the amazing content you create with AstroPaper v4!\n\nHappy Blogging!\n\n[Sat Naing](https://satnaing.dev) <br/>\nCreator of AstroPaper\n";
						const data = {author:"Sat Naing",pubDatetime:new Date(1704360641816),title:"AstroPaper 4.0",featured:true,draft:true,tags:["release"],ogImage:
						new Proxy({"src":"/_astro/AstroPaper-v4.TylavUIc.png","width":1920,"height":1080,"format":"png","fsPath":"C:/Workspaces/Cloned/astro-ublog/src/assets/images/AstroPaper-v4.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Workspaces/Cloned/astro-ublog/src/assets/images/AstroPaper-v4.png";
							}
							
							return target[name];
						}
					})
					,description:"AstroPaper v4: ensuring a smoother and more feature-rich blogging experience."};
						const _internal = {
							type: 'content',
							filePath: "C:/Workspaces/Cloned/astro-ublog/src/content/blog/astro-paper-4.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
