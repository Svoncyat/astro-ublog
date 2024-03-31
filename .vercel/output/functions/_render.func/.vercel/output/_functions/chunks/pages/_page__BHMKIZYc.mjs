import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, A as AstroError, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, h as renderComponent, u as unescapeHTML, n as renderTransition, f as renderSlot } from '../astro_BOFBhy_c.mjs';
import 'kleur/colors';
import { p as prependForwardSlash } from '../astro/assets-service_6TF2uNZM.mjs';
import { $ as $$LinkButton, L as LOCALE, S as SITE, a as $$Header, b as $$Footer, c as $$Layout } from './404_CIgGVYNV.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                          */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { slug } from 'github-slugger';
/* empty css                          */

const $$Astro$4 = createAstro("https://astro-paper.pages.dev/");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  breadcrumbList[0] === "posts" && breadcrumbList.splice(0, 2, `Posts (p\xE1gina ${breadcrumbList[1] || 1})`);
  breadcrumbList[0] === "tags" && !isNaN(Number(breadcrumbList[2])) && breadcrumbList.splice(
    1,
    3,
    `${breadcrumbList[1]} ${Number(breadcrumbList[2]) === 1 ? "" : "(p\xE1gina " + breadcrumbList[2] + ")"}`
  );
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumb astro-ilhxcym7" aria-label="breadcrumb"> <ul class="astro-ilhxcym7"> <li class="astro-ilhxcym7"> <a href="/" class="astro-ilhxcym7">Inicio</a> <span aria-hidden="true" class="astro-ilhxcym7">&raquo;</span> </li> ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li class="astro-ilhxcym7"> <span${addAttribute(`${index > 0 ? "lowercase" : "capitalize"} astro-ilhxcym7`, "class")} aria-current="page">  ${decodeURIComponent(breadcrumb)} </span> </li>` : renderTemplate`<li class="astro-ilhxcym7"> <a${addAttribute(`/${breadcrumb}/`, "href")} class="astro-ilhxcym7">${breadcrumb}</a> <span aria-hidden="true" class="astro-ilhxcym7">&raquo;</span> </li>`
  )} </ul> </nav> `;
}, "C:/Workspaces/Cloned/astro-ublog/src/components/Breadcrumbs.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://astro-paper.pages.dev/", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/adding-new-post.md": () => import('../adding-new-post_Zz4S0w2l.mjs'),"/src/content/blog/astro-paper-2.md": () => import('../astro-paper-2_BUlqvMnp.mjs'),"/src/content/blog/astro-paper-3.md": () => import('../astro-paper-3_8auhC4JV.mjs'),"/src/content/blog/astro-paper-4.md": () => import('../astro-paper-4_DyyiedQJ.mjs'),"/src/content/blog/customizing-astropaper-theme-color-schemes.md": () => import('../customizing-astropaper-theme-color-schemes_CGKlFq7U.mjs'),"/src/content/blog/dynamic-og-images.md": () => import('../dynamic-og-images_Byzdlv_A.mjs'),"/src/content/blog/example-draft-post.md": () => import('../example-draft-post_CsIN7I2U.mjs'),"/src/content/blog/how-to-add-a-new-social-icon.md": () => import('../how-to-add-a-new-social-icon_DrFWLj0y.mjs'),"/src/content/blog/how-to-add-an-estimated-reading-time.md": () => import('../how-to-add-an-estimated-reading-time_DVVoI2p9.mjs'),"/src/content/blog/how-to-connect-astro-paper-blog-with-forestry-cms.md": () => import('../how-to-connect-astro-paper-blog-with-forestry-cms_D3Fk17B7.mjs'),"/src/content/blog/how-to-update-dependencies.md": () => import('../how-to-update-dependencies_ArQ4Fh1j.mjs'),"/src/content/blog/percepcion-de-nivel-educativo-unsm.md": () => import('../percepcion-de-nivel-educativo-unsm_EtdAJy-c.mjs'),"/src/content/blog/portfolio-website-development.md": () => import('../portfolio-website-development_BqaoaCzC.mjs'),"/src/content/blog/predefined-color-schemes.md": () => import('../predefined-color-schemes_BqkPGdX3.mjs'),"/src/content/blog/setting-dates-via-git-hooks.md": () => import('../setting-dates-via-git-hooks_CDVE_REj.mjs'),"/src/content/blog/tailwind-typography.md": () => import('../tailwind-typography_DRdn0DeU.mjs'),"/src/content/blog/terminal-development.md": () => import('../terminal-development_3tXexlHi.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"adding-new-posts-in-astropaper-theme":"/src/content/blog/adding-new-post.md","astro-paper-v3":"/src/content/blog/astro-paper-3.md","astro-paper-2":"/src/content/blog/astro-paper-2.md","astro-paper-v4":"/src/content/blog/astro-paper-4.md","customizing-astropaper-theme-color-schemes":"/src/content/blog/customizing-astropaper-theme-color-schemes.md","dynamic-og-image-generation-in-astropaper-blog-posts":"/src/content/blog/dynamic-og-images.md","example-draft-post":"/src/content/blog/example-draft-post.md","how-to-add-a-new-social-icon":"/src/content/blog/how-to-add-a-new-social-icon.md","how-to-add-estimated-reading-time":"/src/content/blog/how-to-add-an-estimated-reading-time.md","how-to-connect-astro-paper-blog-with-forestry-cms":"/src/content/blog/how-to-connect-astro-paper-blog-with-forestry-cms.md","how-to-update-dependencies":"/src/content/blog/how-to-update-dependencies.md","percepcion-de-nivel-educativo-unsm":"/src/content/blog/percepcion-de-nivel-educativo-unsm.md","how-do-i-develop-my-portfolio-and-blog":"/src/content/blog/portfolio-website-development.md","predefined-color-schemes":"/src/content/blog/predefined-color-schemes.md","setting-dates-via-git-hooks":"/src/content/blog/setting-dates-via-git-hooks.md","tailwind-typography":"/src/content/blog/tailwind-typography.md","how-do-i-develop-my-terminal-portfolio-website-with-react":"/src/content/blog/terminal-development.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/adding-new-post.md": () => import('../adding-new-post_CmumDPjh.mjs'),"/src/content/blog/astro-paper-2.md": () => import('../astro-paper-2_D9vmhk0b.mjs'),"/src/content/blog/astro-paper-3.md": () => import('../astro-paper-3_oBO2iG6l.mjs'),"/src/content/blog/astro-paper-4.md": () => import('../astro-paper-4_CRi67Gj1.mjs'),"/src/content/blog/customizing-astropaper-theme-color-schemes.md": () => import('../customizing-astropaper-theme-color-schemes_CnqNEo_Y.mjs'),"/src/content/blog/dynamic-og-images.md": () => import('../dynamic-og-images_DFVScdkw.mjs'),"/src/content/blog/example-draft-post.md": () => import('../example-draft-post_DErctEti.mjs'),"/src/content/blog/how-to-add-a-new-social-icon.md": () => import('../how-to-add-a-new-social-icon_BMvKcakq.mjs'),"/src/content/blog/how-to-add-an-estimated-reading-time.md": () => import('../how-to-add-an-estimated-reading-time_CXa8p5w1.mjs'),"/src/content/blog/how-to-connect-astro-paper-blog-with-forestry-cms.md": () => import('../how-to-connect-astro-paper-blog-with-forestry-cms_CdUM3t0o.mjs'),"/src/content/blog/how-to-update-dependencies.md": () => import('../how-to-update-dependencies_B-8H7DNP.mjs'),"/src/content/blog/percepcion-de-nivel-educativo-unsm.md": () => import('../percepcion-de-nivel-educativo-unsm_BefgrnX0.mjs'),"/src/content/blog/portfolio-website-development.md": () => import('../portfolio-website-development_DdzBjd5S.mjs'),"/src/content/blog/predefined-color-schemes.md": () => import('../predefined-color-schemes_DSgSV5wI.mjs'),"/src/content/blog/setting-dates-via-git-hooks.md": () => import('../setting-dates-via-git-hooks_Dch7grxZ.mjs'),"/src/content/blog/tailwind-typography.md": () => import('../tailwind-typography_BFzw9YVa.mjs'),"/src/content/blog/terminal-development.md": () => import('../terminal-development_Bo4ok2pQ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const slugifyStr = (str) => slug(str);
const slugifyAll = (arr) => arr.map((str) => slugifyStr(str));

const $$Astro$3 = createAstro("https://astro-paper.pages.dev/");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Main;
  const { props } = Astro2;
  return renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-hsp6otuf" })} ${maybeRenderHead()}<main id="main-content" class="astro-hsp6otuf"> ${"titleTransition" in props ? renderTemplate`<h1 class="astro-hsp6otuf"> ${props.pageTitle[0]} <span class="astro-hsp6otuf"${addAttribute(renderTransition($$result, "hn2qarie", "", props.titleTransition), "data-astro-transition-scope")}> ${props.pageTitle[1]} </span> </h1>` : renderTemplate`<h1 class="astro-hsp6otuf">${props.pageTitle}</h1>`} <p class="astro-hsp6otuf">${props.pageDesc}</p> ${renderSlot($$result, $$slots["default"])} </main> `;
}, "C:/Workspaces/Cloned/astro-ublog/src/layouts/Main.astro", "self");

const $$Astro$2 = createAstro("https://astro-paper.pages.dev/");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, prevUrl, nextUrl } = Astro2.props;
  const prev = currentPage > 1 ? "" : "disabled";
  const next = currentPage < totalPages ? "" : "disabled";
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="pagination-wrapper astro-d776pwuy" aria-label="Pagination">${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": prev === "disabled", "href": prevUrl, "className": `mr-4 select-none ${prev} astro-d776pwuy`, "ariaLabel": "Previous" }, { "default": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${prev}-svg astro-d776pwuy`, "class")}><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" class="astro-d776pwuy"></path></svg>
Prev
` })}${currentPage} / ${totalPages}${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": next === "disabled", "href": nextUrl, "className": `ml-4 select-none ${next} astro-d776pwuy`, "ariaLabel": "Next" }, { "default": ($$result2) => renderTemplate`
Next
<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${next}-svg astro-d776pwuy`, "class")}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-d776pwuy"></path></svg>` })}</nav>`}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/components/Pagination.astro", void 0);

function Datetime({
  pubDatetime,
  modDatetime,
  size = "sm",
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center space-x-2 opacity-80 ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: `${size === "sm" ? "scale-90" : "scale-100"} inline-block h-6 w-6 min-w-[1.375rem] fill-skin-base`,
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsx("path", { d: "M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" }),
          /* @__PURE__ */ jsx("path", { d: "M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" })
        ]
      }
    ),
    modDatetime && modDatetime > pubDatetime ? /* @__PURE__ */ jsx("span", { className: `italic ${size === "sm" ? "text-sm" : "text-base"}`, children: "Updated:" }) : /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Published:" }),
    /* @__PURE__ */ jsx("span", { className: `italic ${size === "sm" ? "text-sm" : "text-base"}`, children: /* @__PURE__ */ jsx(
      FormattedDatetime,
      {
        pubDatetime,
        modDatetime
      }
    ) })
  ] });
}
const FormattedDatetime = ({ pubDatetime, modDatetime }) => {
  const myDatetime = new Date(
    modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime
  );
  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const time = myDatetime.toLocaleTimeString(LOCALE.langTag, {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("time", { dateTime: myDatetime.toISOString(), children: date }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " | " }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: " at " }),
    /* @__PURE__ */ jsx("span", { className: "text-nowrap", children: time })
  ] });
};

function Card({ href, frontmatter, secHeading = true }) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline"
  };
  return /* @__PURE__ */ jsxs("li", { className: "my-6", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href,
        className: "inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0",
        children: secHeading ? /* @__PURE__ */ jsx("h2", { ...headerProps, children: title }) : /* @__PURE__ */ jsx("h3", { ...headerProps, children: title })
      }
    ),
    /* @__PURE__ */ jsx(Datetime, { pubDatetime, modDatetime }),
    /* @__PURE__ */ jsx("p", { children: description })
  ] });
}

const postFilter = ({ data }) => {
  const isPublishTimePassed = Date.now() > new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && isPublishTimePassed;
};

const getSortedPosts = (posts) => {
  return posts.filter(postFilter).sort(
    (a, b) => Math.floor(
      new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1e3
    ) - Math.floor(
      new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1e3
    )
  );
};

const getPageNumbers = (numberOfPosts) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return pageNumbers;
};

const getPagination = ({
  posts,
  page,
  isIndex = false
}) => {
  const totalPagesArray = getPageNumbers(posts.length);
  const totalPages = totalPagesArray.length;
  const currentPage = isIndex ? 1 : page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page)) ? Number(page) : 0;
  const lastPost = isIndex ? SITE.postPerPage : currentPage * SITE.postPerPage;
  const startPost = isIndex ? 0 : lastPost - SITE.postPerPage;
  const paginatedPosts = posts.slice(startPost, lastPost);
  return {
    totalPages,
    currentPage,
    paginatedPosts
  };
};

const $$Astro$1 = createAstro("https://astro-paper.pages.dev/");
const $$TagPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagPosts;
  const { currentPage, totalPages, paginatedPosts, tag, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${tagName} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`Etiqueta:`, `${tagName}`], "titleTransition": tag, "pageDesc": `Todos los art\xEDculos con la etiqueta "${tagName}".` }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${paginatedPosts.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> `, "title": ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "vfrq7tp3", "", tag), "data-astro-transition-scope")}>${`Etiqueta:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "prevUrl": `/tags/${tag}${currentPage - 1 !== 1 ? "/" + (currentPage - 1) : ""}/`, "nextUrl": `/tags/${tag}/${currentPage + 1}/` })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1 })} ` })}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/layouts/TagPosts.astro", "self");

const getUniqueTags = (posts) => {
  const tags = posts.filter(postFilter).flatMap((post) => post.data.tags).map((tag) => ({ tag: slugifyStr(tag), tagName: tag })).filter(
    (value, index, self) => self.findIndex((tag) => tag.tag === value.tag) === index
  ).sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro("https://astro-paper.pages.dev/");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    const totalPages = getPageNumbers(tagPosts.length);
    return totalPages.map((page) => ({
      params: { tag, page },
      props: { tag, tagName }
    }));
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const { tag, tagName } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postsByTag = getPostsByTag(posts, tag);
  const pagination = getPagination({
    posts: postsByTag,
    page
  });
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { ...pagination, "tag": tag, "tagName": tagName })}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/pages/tags/[tag]/[page].astro", void 0);

const $$file = "C:/Workspaces/Cloned/astro-ublog/src/pages/tags/[tag]/[page].astro";
const $$url = "/tags/[tag]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Breadcrumbs as $, Card as C, Datetime as D, _page_ as _, $$Main as a, $$Pagination as b, getPageNumbers as c, getSortedPosts as d, getPagination as e, getUniqueTags as f, getCollection as g, getPostsByTag as h, $$TagPosts as i, slugifyStr as s };
