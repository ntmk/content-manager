module.exports = {
  siteMetadata: {
    title: `Content Repository`,
    description: `Main hub for all site content`,
    author: `Nathan Mackenzie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        publicPath: "/"
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Data`,
      },  
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
  ],
}
