const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },

  siteMetadata: {
    title: `Artist Rescue Trust`,
    author: `Artist Rescue Trust`,
    description: `Crisis brings out our human nature. Generosity, compassion and care. Donate to help people in need during COVID19, or sign up for financial assistance due to COVID19.`,
    siteUrl: `https://artist-rescue-trust.netlify.com/`,
    social: {
      twitter: `@artist_rescue`,
      instagram: `@artistrescuetrust`,
      facebook: `@artistrescuetrust`,
      linkedin: `artistrescuetrust`,
      tiktok: `@artistrescuetrust`,
    },
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `34ecf76bb301fb616e6a8cab75d254`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artist Rescue Trust`,
        short_name: `Artist Rescue Trust`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logomark.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "wdm1vwz",
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165006536-1",
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see instructions below
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
