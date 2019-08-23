require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Web Design II`,
    description: `Learn the next steps for building site quickly but effectively.`,
    author: `@philschanely`,
    pages: [
      {
        label: "Home",
        path: "/"
      },
      {
        label: "Lessons",
        path: "/lessons/"
      },
      {
        label: "Activities",
        path: "/activities/"
      },
      {
        label: "Resources",
        path: "/resources"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `activities`,
        path: `${__dirname}/src/pages/activities`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lessons`,
        path: `${__dirname}/src/pages/lessons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `snippets`,
        path: `${__dirname}/src/snippets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/layouts/simple-layout.js'),
          activities: require.resolve('./src/components/layouts/paginated-layout.js'),
          lessons: require.resolve('./src/components/layouts/paginated-layout.js'),
          snippets: require.resolve('./src/components/layouts/snippet-layout.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ]
      }
    },
    {
      resolve: "gatsby-plugin-stylelint",
      options: { files: ["src/**/*.scss"] }
    },
  ],
}
