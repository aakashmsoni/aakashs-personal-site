/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aakashs Personal Site`,
    siteUrl: `https://www.yourdomain.tld`,
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
