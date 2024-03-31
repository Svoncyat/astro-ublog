import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute, n as renderTransition, F as Fragment, u as unescapeHTML } from '../astro_BOFBhy_c.mjs';
import 'kleur/colors';
import { a as $$Main, C as Card, b as $$Pagination, s as slugifyStr, D as Datetime, g as getCollection, c as getPageNumbers, d as getSortedPosts, e as getPagination, f as getUniqueTags, h as getPostsByTag, i as $$TagPosts } from './_page__BHMKIZYc.mjs';
import { a as $$Header, b as $$Footer, S as SITE, c as $$Layout, $ as $$LinkButton, s as socialIcons, d as SOCIALS, e as $$Socials, f as $$Hr } from './404_CIgGVYNV.mjs';
/* empty css                          */
/* empty css                          */
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$8 = createAstro("https://astro-paper.pages.dev/");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Posts;
  const { currentPage, totalPages, paginatedPosts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Publicaciones | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "posts" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Publicaciones", "pageDesc": "Todos los art\xEDculos que he publicado." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${paginatedPosts.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "prevUrl": `/posts${currentPage - 1 !== 1 ? "/" + (currentPage - 1) : ""}/`, "nextUrl": `/posts/${currentPage + 1}/` })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1 })} ` })}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/layouts/Posts.astro", void 0);

const $$Astro$7 = createAstro("https://astro-paper.pages.dev/");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, size = "sm" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`inline-block ${size === "sm" ? "my-1 underline-offset-4" : "my-3 mx-1 underline-offset-8"} astro-blwjyjpt`, "class")}> <a${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`${size === "sm" ? "text-sm" : "text-lg"} pr-2 group astro-blwjyjpt`, "class")}${addAttribute(renderTransition($$result, "36ssibgs", "", tag), "data-astro-transition-scope")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${size === "sm" ? " scale-75" : "scale-110"} astro-blwjyjpt`, "class")}><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z" class="astro-blwjyjpt"></path> </svg>
&nbsp;<span class="astro-blwjyjpt">${tag}</span> </a> </li> `;
}, "C:/Workspaces/Cloned/astro-ublog/src/components/Tag.astro", "self");

const $$Astro$6 = createAstro("https://astro-paper.pages.dev/");
const $$ShareLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ShareLinks;
  const URL = Astro2.url;
  const shareLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/?text=",
      linkTitle: `Share this post via WhatsApp`
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/sharer.php?u=",
      linkTitle: `Share this post on Facebook`
    },
    {
      name: "Twitter",
      href: "https://twitter.com/intent/tweet?url=",
      linkTitle: `Tweet this post`
    },
    {
      name: "Telegram",
      href: "https://t.me/share/url?url=",
      linkTitle: `Share this post via Telegram`
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/pin/create/button/?url=",
      linkTitle: `Share this post on Pinterest`
    },
    {
      name: "Mail",
      href: "mailto:?subject=See%20this%20post&body=",
      linkTitle: `Share this post via email`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`social-icons astro-wkojbtzc`, "class")}> <span class="italic astro-wkojbtzc">Comparte este artículo en:</span> <div class="text-center astro-wkojbtzc"> ${shareLinks.map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": `${social.href + URL}`, "className": "link-button astro-wkojbtzc", "title": social.linkTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(socialIcons[social.name])}` })} <span class="sr-only astro-wkojbtzc">${social.linkTitle}</span> ` })}`)} </div> </div> `;
}, "C:/Workspaces/Cloned/astro-ublog/src/components/ShareLinks.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://astro-paper.pages.dev/");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post } = Astro2.props;
  const {
    title,
    author,
    description,
    ogImage,
    canonicalURL,
    pubDatetime,
    modDatetime,
    tags
  } = post.data;
  const { Content } = await post.render();
  const ogImageUrl = typeof ogImage === "string" ? ogImage : ogImage?.src;
  const ogUrl = new URL(
    ogImageUrl ?? `/posts/${slugifyStr(title)}.png`,
    Astro2.url.origin
  ).href;
  const layoutProps = {
    title: `${title} | ${SITE.title}`,
    author,
    description,
    pubDatetime,
    modDatetime,
    canonicalURL,
    ogImage: ogUrl,
    scrollSmooth: true
  };
  return renderTemplate(_a || (_a = __template(["", '  <script>\n  /** Create a progress indicator\n   *  at the top */\n  function createProgressBar() {\n    // Create the main container div\n    const progressContainer = document.createElement("div");\n    progressContainer.className =\n      "progress-container fixed top-0 z-10 h-1 w-full bg-skin-fill";\n\n    // Create the progress bar div\n    const progressBar = document.createElement("div");\n    progressBar.className = "progress-bar h-1 w-0 bg-skin-accent";\n    progressBar.id = "myBar";\n\n    // Append the progress bar to the progress container\n    progressContainer.appendChild(progressBar);\n\n    // Append the progress container to the document body or any other desired parent element\n    document.body.appendChild(progressContainer);\n  }\n  createProgressBar();\n\n  /** Update the progress bar\n   *  when user scrolls */\n  function updateScrollProgress() {\n    const winScroll =\n      document.body.scrollTop || document.documentElement.scrollTop;\n    const height =\n      document.documentElement.scrollHeight -\n      document.documentElement.clientHeight;\n    const scrolled = (winScroll / height) * 100;\n    if (document) {\n      const myBar = document.getElementById("myBar");\n      if (myBar) {\n        myBar.style.width = scrolled + "%";\n      }\n    }\n  }\n  document.addEventListener("scroll", updateScrollProgress);\n\n  /** Attaches links to headings in the document,\n   *  allowing sharing of sections easily */\n  function addHeadingLinks() {\n    let headings = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"));\n    for (let heading of headings) {\n      heading.classList.add("group");\n      let link = document.createElement("a");\n      link.innerText = "#";\n      link.className = "heading-link hidden group-hover:inline-block ml-2";\n      link.href = "#" + heading.id;\n      link.ariaHidden = "true";\n      heading.appendChild(link);\n    }\n  }\n  addHeadingLinks();\n\n  /** Attaches copy buttons to code blocks in the document,\n   * allowing users to copy code easily. */\n  function attachCopyButtons() {\n    let copyButtonLabel = "Copy";\n    let codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    for (let codeBlock of codeBlocks) {\n      let wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      let copyButton = document.createElement("button");\n      copyButton.className =\n        "copy-code absolute right-3 -top-3 rounded bg-skin-card px-2 py-1 text-xs leading-4 text-skin-base font-medium";\n      copyButton.innerHTML = copyButtonLabel;\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      // wrap codebock with relative parent element\n      codeBlock?.parentNode?.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n\n    async function copyCode(block, button) {\n      let code = block.querySelector("code");\n      let text = code?.innerText;\n\n      await navigator.clipboard.writeText(text ?? "");\n\n      // visual feedback that task is completed\n      button.innerText = "Copied";\n\n      setTimeout(() => {\n        button.innerText = copyButtonLabel;\n      }, 700);\n    }\n  }\n  attachCopyButtons();\n\n  /** Scrolls the document to the top when\n   * the "Back to Top" button is clicked. */\n  function backToTop() {\n    document.querySelector("#back-to-top")?.addEventListener("click", () => {\n      document.body.scrollTop = 0; // For Safari\n      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n    });\n  }\n  backToTop();\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { ...layoutProps, "class": "astro-vj4tpspi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-vj4tpspi" })}  ${maybeRenderHead()}<div class="mx-auto flex w-full max-w-3xl justify-start px-2 astro-vj4tpspi"> <button class="focus-outline mb-2 mt-8 flex hover:opacity-75 astro-vj4tpspi" onclick="(() => (history.length === 1) ? window.location = '/' : history.back())()"> <svg xmlns="http://www.w3.org/2000/svg" class="astro-vj4tpspi"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" class="astro-vj4tpspi"></path> </svg><span class="astro-vj4tpspi">Volver</span> </button> </div> <main id="main-content" class="astro-vj4tpspi"> <h1 class="post-title astro-vj4tpspi"${addAttribute(renderTransition($$result2, "ti6a3mbw", "", slugifyStr(title)), "data-astro-transition-scope")}>${title}</h1> ${renderComponent($$result2, "Datetime", Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime, "size": "lg", "className": "my-2 astro-vj4tpspi" })} <article id="article" role="article" class="prose mx-auto mt-8 max-w-3xl astro-vj4tpspi"> ${renderComponent($$result2, "Content", Content, { "class": "astro-vj4tpspi" })} </article> <ul class="my-8 astro-vj4tpspi"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": slugifyStr(tag), "class": "astro-vj4tpspi" })}`)} </ul> <div class="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row-reverse sm:items-end sm:gap-4 astro-vj4tpspi"> <button id="back-to-top" class="focus-outline whitespace-nowrap py-1 hover:opacity-75 astro-vj4tpspi"> <svg xmlns="http://www.w3.org/2000/svg" class="rotate-90 astro-vj4tpspi"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" class="astro-vj4tpspi"></path> </svg> <span class="astro-vj4tpspi">Ir al título</span> </button> ${renderComponent($$result2, "ShareLinks", $$ShareLinks, { "class": "astro-vj4tpspi" })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-vj4tpspi" })} ` }));
}, "C:/Workspaces/Cloned/astro-ublog/src/layouts/PostDetails.astro", "self");

const $$Astro$4 = createAstro("https://astro-paper.pages.dev/");
async function getStaticPaths$1() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
  const pagePaths = getPageNumbers(posts.length).map((pageNum) => ({
    params: { slug: String(pageNum) }
  }));
  return [...postResult, ...pagePaths];
}
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  const { slug } = Astro2.params;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const pagination = getPagination({
    posts: sortedPosts,
    page: slug
  });
  return renderTemplate`${post ? renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post })}` : renderTemplate`${renderComponent($$result, "Posts", $$Posts, { ...pagination })}`}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/pages/posts/[slug]/index.astro", void 0);

const $$file$4 = "C:/Workspaces/Cloned/astro-ublog/src/pages/posts/[slug]/index.astro";
const $$url$4 = "/posts/[slug]";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  getStaticPaths: getStaticPaths$1,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://astro-paper.pages.dev/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const pagination = getPagination({
    posts: sortedPosts,
    page: 1,
    isIndex: true
  });
  return renderTemplate`${renderComponent($$result, "Posts", $$Posts, { ...pagination })}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/pages/posts/index.astro", void 0);

const $$file$3 = "C:/Workspaces/Cloned/astro-ublog/src/pages/posts/index.astro";
const $$url$3 = "/posts";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://astro-paper.pages.dev/");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.map(({ tag, tagName }) => {
    return {
      params: { tag },
      props: { tag, tagName, posts }
    };
  });
}
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { tag, tagName, posts } = Astro2.props;
  const postsByTag = getPostsByTag(posts, tag);
  const pagination = getPagination({
    posts: postsByTag,
    page: 1,
    isIndex: true
  });
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { ...pagination, "tag": tag, "tagName": tagName })}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/pages/tags/[tag]/index.astro", void 0);

const $$file$2 = "C:/Workspaces/Cloned/astro-ublog/src/pages/tags/[tag]/index.astro";
const $$url$2 = "/tags/[tag]";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  getStaticPaths,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://astro-paper.pages.dev/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Etiquetas | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Etiquetas", "pageDesc": "Todas las etiquetas usadas en las publicaciones." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map(({ tag }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "size": "lg" })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/pages/tags/index.astro", void 0);

const $$file$1 = "C:/Workspaces/Cloned/astro-ublog/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const featuredPosts = sortedPosts.filter(({ data }) => data.featured);
  const recentPosts = sortedPosts.filter(({ data }) => !data.featured);
  const socialCount = SOCIALS.filter((social) => social.active).length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-j7pv25f6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-j7pv25f6" })} ${maybeRenderHead()}<main id="main-content" class="astro-j7pv25f6"> <section id="hero" class="astro-j7pv25f6"> <h1 class="astro-j7pv25f6">Blog Universitario</h1> <h2 class="astro-j7pv25f6">Joy Steven Correa Torres</h2> <p class="astro-j7pv25f6">
Espacio web creado para la recopilación de proyectos universitarios.
        Este blog/portafolio indexa mi trayectoria academica atravesando
        diversas áreas y en el camino reflejando mi crecimiento personal.
</p> ${// only display if at least one social link is enabled
  socialCount > 0 && renderTemplate`<div class="social-wrapper astro-j7pv25f6"> <div class="social-links astro-j7pv25f6"> <i class="astro-j7pv25f6">Plantilla recuperada de:</i> </div> ${renderComponent($$result2, "Socials", $$Socials, { "class": "astro-j7pv25f6" })} </div>`} </section> ${renderComponent($$result2, "Hr", $$Hr, { "class": "astro-j7pv25f6" })} ${featuredPosts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-j7pv25f6" }, { "default": ($$result3) => renderTemplate` <section id="featured" class="astro-j7pv25f6"> <h2 class="astro-j7pv25f6">Tareas Recientes</h2> <ul class="astro-j7pv25f6"> ${featuredPosts.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data, "secHeading": false, "class": "astro-j7pv25f6" })}`)} </ul> </section> ${recentPosts.length > 0 && renderTemplate`${renderComponent($$result3, "Hr", $$Hr, { "class": "astro-j7pv25f6" })}`}` })}`} ${recentPosts.length > 0 && renderTemplate`<section id="recent-posts" class="astro-j7pv25f6"> <h2 class="astro-j7pv25f6">Otros</h2> <ul class="astro-j7pv25f6"> ${recentPosts.map(
    ({ data, slug }, index) => index < 4 && renderTemplate`${renderComponent($$result2, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data, "secHeading": false, "class": "astro-j7pv25f6" })}`
  )} </ul> </section>`} ${renderComponent($$result2, "Hr", $$Hr, { "class": "astro-j7pv25f6" })} <div class="all-posts-btn-wrapper astro-j7pv25f6"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts/", "class": "astro-j7pv25f6" }, { "default": ($$result3) => renderTemplate`
Todas las publicaciones
<svg xmlns="http://www.w3.org/2000/svg" class="astro-j7pv25f6"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-j7pv25f6"></path> </svg> ` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-j7pv25f6" })} ` })} `;
}, "C:/Workspaces/Cloned/astro-ublog/src/pages/index.astro", void 0);

const $$file = "C:/Workspaces/Cloned/astro-ublog/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
