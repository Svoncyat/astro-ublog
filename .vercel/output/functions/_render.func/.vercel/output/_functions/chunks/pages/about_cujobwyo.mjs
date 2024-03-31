import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as renderSlot, u as unescapeHTML } from '../astro_BOFBhy_c.mjs';
import 'kleur/colors';
import { S as SITE, c as $$Layout, a as $$Header, b as $$Footer } from './404_CIgGVYNV.mjs';
import { $ as $$Breadcrumbs } from './_page__BHMKIZYc.mjs';

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Workspaces/Cloned/astro-ublog/src/layouts/AboutLayout.astro", void 0);

const html = "<p>AstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on <a href=\"https://satnaing.dev/blog\">my personal blog</a>.</p>\n<p>This theme is aimed to be accessible out of the box. Light and dark mode are supported by\r\ndefault and additional color schemes can also be configured.</p>\n<p>This theme is self-documented _ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.</p>\n<div>\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p>This theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.</p>\n<h2 id=\"features\">Features</h2>\n<p>Here are certain features of this site.</p>\n<ul>\n<li>fully responsive and accessible</li>\n<li>SEO-friendly</li>\n<li>light &#x26; dark mode</li>\n<li>fuzzy search</li>\n<li>super fast performance</li>\n<li>draft posts</li>\n<li>pagination</li>\n<li>sitemap &#x26; rss feed</li>\n<li>highly customizable</li>\n</ul>\n<p>If you like this theme, you can star/contribute to the <a href=\"https://github.com/satnaing/astro-paper\">repo</a>.<br>\nOr you can even give any feedback via my <a href=\"mailto:contact@satnaing.dev\">email</a>.</p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "C:/Workspaces/Cloned/astro-ublog/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\r\nAstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on [my personal blog](https://satnaing.dev/blog).\r\n\r\nThis theme is aimed to be accessible out of the box. Light and dark mode are supported by\r\ndefault and additional color schemes can also be configured.\r\n\r\nThis theme is self-documented \\_ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.\r\n\r\n<div>\r\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\r\n</div>\r\n\r\n## Tech Stack\r\n\r\nThis theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.\r\n\r\n## Features\r\n\r\nHere are certain features of this site.\r\n\r\n- fully responsive and accessible\r\n- SEO-friendly\r\n- light & dark mode\r\n- fuzzy search\r\n- super fast performance\r\n- draft posts\r\n- pagination\r\n- sitemap & rss feed\r\n- highly customizable\r\n\r\nIf you like this theme, you can star/contribute to the [repo](https://github.com/satnaing/astro-paper).  \r\nOr you can even give any feedback via my [email](mailto:contact@satnaing.dev).\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tech-stack","text":"Tech Stack"},{"depth":2,"slug":"features","text":"Features"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
