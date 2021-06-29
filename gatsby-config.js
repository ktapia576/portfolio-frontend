module.exports = {
  siteMetadata: {
    title: `Portfolio - Kevin Tapia`,
    description: `Kevin's Portfolio to check out his work and experience!`,
    author: `@ktapia576`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
