// @ts-check

import { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const name = "顶功 · 集萃";

const config: Config = {
  title: name,
  tagline: "顶功汉字输入方案的介绍",
  url: "https://ding.tansongchen.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "logo.png",

  organizationName: "tansongchen",
  projectName: "ding",
  trailingSlash: false,

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [
    "@docusaurus/plugin-content-pages",
    [
      "@docusaurus/plugin-content-docs",
      {
        routeBasePath: "/",
        sidebarPath: require.resolve("./sidebars.ts"),
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
        editUrl: "https://github.com/tansongchen/ding/",
      },
    ],
    [
      "docusaurus-plugin-pwa-generator",
      {
        generatorInput: {
          source: "static/logo.png",
          options: { log: false, padding: "0" },
        },
        partialManifest: {
          name: name,
          short_name: name,
          theme_color: "#2e8555",
          background_color: "#222222",
          display: "standalone",
          scope: "./",
          start_url: "./index.html",
        },
      },
    ],
  ],

  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
  ],

  themeConfig:
    {
      navbar: {
        title: "顶功 · 集萃",
        logo: {
          alt: "顶功 · 集萃",
          src: "logo.png",
        },
        items: [
          ...[
            ["教程", "tutorial"],
            ["理论", "theory"],
          ].map(([label, sidebarId]) => ({
            type: "docSidebar",
            position: "left",
            label,
            sidebarId,
          })),
          {
            href: "https://github.com/tansongchen/ding",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © 2016 - ${new Date().getFullYear()} 蓝落萧, Yb.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    },

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
