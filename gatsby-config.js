require("dotenv").config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Elapce`,
    description: `Gatsby Elapce project`,
    author: `Sam S`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //`gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 680,
              linkImagesToOriginal: false,
              withWebp: true,
              loading: "lazy",
            },
          },
        ]
      }
    }, 
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2h0bct4o9jya`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -180
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-antd`, 
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "MAPBOX_TOKEN",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/*`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
