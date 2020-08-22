// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Gridsome",
  icon: "<text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/posts/**/*.md",
        remark: {
          plugins: [
            [
              "@noxify/gridsome-plugin-remark-embed",
              {
                enabledProviders: ["Youtube", "Twitter", "Gist"],
                Twitter: {
                  omitScript: true,
                  template: "./src/providerTemplates/Twitter.hbs",
                },
                Gist: {
                  omitStylesheet: false,
                },
              },
            ],
          ],
        },
      },
    },
  ],
  templates: {
    Post: "/:slug",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
