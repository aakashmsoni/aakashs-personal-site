/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aakash Soni`,
    siteUrl: `https://www.aakashsoni.com`,
    description: "web dev portfolio",
    copyright: "This website is copyright 2024 Aakash Soni"
  },
  // flags: {
  //   DEV_SSR: true
  // },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "aakashsoni.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/src/skills`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    // "gatsby-plugin-styled-components",
    // "babel-plugin-styled-components",
  ],
}
