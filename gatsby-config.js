/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aakash Soni`,
    siteUrl: `https://www.aakashsoni.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "aakashsoni.com",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
