module.exports = {
  siteMetadata: {
    title: `Starter`,
    description: ``,
    author: ``,
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
        typeName: `Products`,
      },  
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data`,
      },
    },
  ],
}
