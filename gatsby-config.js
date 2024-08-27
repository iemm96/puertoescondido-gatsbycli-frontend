require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Inmobiliaria Puerto Escondido`,
    description: `Somos una empresa 100% Mexicana originaria de la ciudad de Puerto Escondido, que se dedica a la intermediación en la compra - venta de inmuebles, terrenos, ranchos y fraccionamientos a buen precio, en Puerto Escondido y sus zonas aledañas.`,
    author: `@gatsbyjs`,
    siteUrl: `https://inmobiliariapuertoescondido.com`,
    og: {
      siteName: "Inmobiliaria Puerto Escondido",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
        preloadTags: false,
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Poppins`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `xkbliqmc`,
        dataset: `production`,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "pages",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          tokenize: "forward",
        },
        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allProperty {
              nodes {
                name
                description
                uid
                isFeatured
                slug
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "uid",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["name", "description"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["name", "description", "slug"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allProperty.nodes.map(node => ({
            uid: node.uid,
            slug: node.slug,
            name: node.name,
            description: node.description,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-GSVP051DFF", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
