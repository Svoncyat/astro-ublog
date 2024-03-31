const id = "customizing-astropaper-theme-color-schemes.md";
						const collection = "blog";
						const slug = "customizing-astropaper-theme-color-schemes";
						const body = "\nThis post will explain how you can enable/disable light & dark mode for the website. Moreover, you'll learn how you can customize color schemes of the entire website.\n\n## Table of contents\n\n## Enable/disable light & dark mode\n\nAstroPaper theme will include light and dark mode by default. In other words, there will be two color schemes\\_ one for light mode and another for dark mode. This default behavior can be disabled in SITE configuration object of the `src/config.ts` file.\n\n```js\n// file: src/config.ts\nexport const SITE = {\n  website: \"https://astro-paper.pages.dev/\",\n  author: \"Sat Naing\",\n  desc: \"A minimal, responsive and SEO-friendly Astro blog theme.\",\n  title: \"AstroPaper\",\n  ogImage: \"astropaper-og.jpg\",\n  lightAndDarkMode: true, // true by default\n  postPerPage: 3,\n};\n```\n\nTo disable `light & dark mode` set `SITE.lightAndDarkMode` to `false`.\n\n## Choose primary color scheme\n\nBy default, if we disable `SITE.lightAndDarkMode`, we will only get system's prefers-color-scheme.\n\nThus, to choose primary color scheme instead of prefers-color-scheme, we have to set color scheme in the primaryColorScheme variable inside `public/toggle-theme.js`.\n\n```js\n/* file: public/toggle-theme.js */\nconst primaryColorScheme = \"\"; // \"light\" | \"dark\"\n\n// Get theme data from local storage\nconst currentTheme = localStorage.getItem(\"theme\");\n\n// other codes etc...\n```\n\nThe **primaryColorScheme** variable can hold two values\\_ `\"light\"`, `\"dark\"`. You can leave the empty string (default) if you don't want to specify the primary color scheme.\n\n- `\"\"` - system's prefers-color-scheme. (default)\n- `\"light\"` - use light mode as primary color scheme.\n- `\"dark\"` - use dark mode as primary color scheme.\n\n<details><summary>Why 'primaryColorScheme' is not inside config.ts?</summary>\n\n> To avoid color flickering on page reload, we have to place the toggle-switch JavaScript codes as early as possible when the page loads. It solves the problem of flickering, but as a trade-off, we cannot use ESM imports anymore.\n\n[Click here](https://docs.astro.build/en/reference/directives-reference/#isinline) to know more about Astro's `is:inline` script.\n\n</details>\n\n## Customize color schemes\n\nBoth light & dark color schemes of AstroPaper theme can be customized. You can do this in `src/styles/base.css` file.\n\n```css\n/* file: src/styles/base.css */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  :root,\n  html[data-theme=\"light\"] {\n    --color-fill: 251, 254, 251;\n    --color-text-base: 40, 39, 40;\n    --color-accent: 0, 108, 172;\n    --color-card: 230, 230, 230;\n    --color-card-muted: 205, 205, 205;\n    --color-border: 236, 233, 233;\n  }\n  html[data-theme=\"dark\"] {\n    --color-fill: 47, 55, 65;\n    --color-text-base: 230, 230, 230;\n    --color-accent: 26, 217, 217;\n    --color-card: 63, 75, 90;\n    --color-card-muted: 89, 107, 129;\n    --color-border: 59, 70, 85;\n  }\n  /* other styles */\n}\n```\n\nIn AstroPaper theme, `:root` and `html[data-theme=\"light\"]` selectors are used as the light color scheme and `html[data-theme=\"dark\"]` is used the dark color scheme. If you want to customize your custom color scheme, you have to specify your light color scheme inside `:root`,`html[data-theme=\"light\"]` and dark color scheme inside `html[data-theme=\"dark\"]`.\n\nColors are declared in CSS custom property (CSS Variable) notation. Color property values are written in rgb values. (Note: instead of `rgb(40, 39, 40)`, only specify `40, 39, 40`)\n\nHere is the detail explanation of color properties.\n\n| Color Property       | Definition & Usage                                         |\n| -------------------- | ---------------------------------------------------------- |\n| `--color-fill`       | Primary color of the website. Usually the main background. |\n| `--color-text-base`  | Secondary color of the website. Usually the text color.    |\n| `--color-accent`     | Accent color of the website. Link color, hover color etc.  |\n| `--color-card`       | Card, scrollbar and code background color (like `this`).   |\n| `--color-card-muted` | Card and scrollbar background color for hover state etc.   |\n| `--color-border`     | Border color. Especially used in horizontal row (hr)       |\n\nHere is an example of changing the light color scheme.\n\n```css\n@layer base {\n  /* lobster color scheme */\n  :root,\n  html[data-theme=\"light\"] {\n    --color-fill: 246, 238, 225;\n    --color-text-base: 1, 44, 86;\n    --color-accent: 225, 74, 57;\n    --color-card: 220, 152, 145;\n    --color-card-muted: 233, 119, 106;\n    --color-border: 220, 152, 145;\n  }\n}\n```\n\n> Check out some [predefined color schemes](https://astro-paper.pages.dev/posts/predefined-color-schemes/) AstroPaper has already crafted for you.\n";
						const data = {author:"Sat Naing",pubDatetime:new Date(1664119235000),title:"Customizing AstroPaper theme color schemes",featured:false,draft:true,tags:["color-schemes","docs"],description:"How you can enable/disable light & dark mode; and customize color schemes of AstroPaper theme."};
						const _internal = {
							type: 'content',
							filePath: "C:/Workspaces/Cloned/astro-ublog/src/content/blog/customizing-astropaper-theme-color-schemes.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
