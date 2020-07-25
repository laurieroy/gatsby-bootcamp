require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
  })
  
module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ],
  siteMetadata: {
    title: 'Laurie Roy',
    author: 'Laurie Roy'
  }
}
