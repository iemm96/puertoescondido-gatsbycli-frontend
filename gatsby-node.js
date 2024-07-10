const axios = require("axios")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { GATSBY_API_HOST } = process.env

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const dataProperties = await graphql(`
      query Properties {
        allProperty {
          nodes {
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  width: 280
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            name
            uid
            isFeatured
            slug
            location {
              name
            }
            features {
              name
            }
            category {
              name
            }
          }
        }
      }
    `)

    const dataPosts = await graphql(`
      query AllPost {
        allSanityPost {
          nodes {
            title
            slug {
              current
            }
          }
        }
      }
    `)

    const postsPerPage = 6
    let numPages = 0

    dataPosts.data.allSanityPost.nodes.forEach(node => {
      createPage({
        path: `/post/${node.slug.current}`,
        component: require.resolve("./src/templates/Post.tsx"),
        context: { slug: node.slug.current },
      })
    })

    const numPagesBlog = Math.ceil(
      dataPosts.data.allSanityPost.nodes.length / postsPerPage
    )

    Array.from({ length: numPagesBlog }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: require.resolve("./src/templates/Blog.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPagesBlog,
          totalResults: dataPosts.data.allSanityPost.nodes.length,
          currentPage: i + 1,
        },
      })
    })

    dataProperties.data.allProperty.nodes.forEach(node => {
      createPage({
        path: `/propiedad/${node.slug}`,
        component: require.resolve("./src/templates/PropertyDetails.tsx"),
        context: { slug: node.slug },
      })
    })

    numPages = Math.ceil(
      dataProperties.data.allProperty.nodes.length / postsPerPage
    )

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/propiedades` : `/propiedades/${i + 1}`,
        component: require.resolve("./src/templates/PropertiesList.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          totalResults: dataProperties.data.allProperty.nodes.length,
          currentPage: i + 1,
        },
      })
    })
  } catch (e) {
    console.log(e)
  }
}

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions

  try {
    //Fetch categories
    const fetchCategories = async () =>
      await axios.get(`${GATSBY_API_HOST}categories`)
    const resultCategories = await fetchCategories()

    resultCategories.data.categories.map(async (category, i) => {
      createNode({
        ...category,
        id: `Category-${i}`,
        parent: null,
        children: [],
        internal: {
          type: "Category", // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify(category),
          contentDigest: createContentDigest(category),
        },
      })
    })

    //Fetch locations
    const fetchLocations = async () =>
      await axios.get(`${GATSBY_API_HOST}locations`)
    const resultLocations = await fetchLocations()

    let node_type = "Location"

    resultLocations.data.locations.map(async (location, i) => {
      createNode({
        ...location,
        id: `${node_type}-${i}`,
        parent: null,
        children: [],
        internal: {
          type: node_type, // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify(location),
          contentDigest: createContentDigest(location),
        },
      })
    })

    //Fetch locations
    const fetchBanners = async () =>
      await axios.get(`${GATSBY_API_HOST}banners`)
    const resultBanner = await fetchBanners()

    node_type = "Banner"

    resultBanner.data.banners.map(async (banner, i) => {
      createNode({
        ...banner,
        id: `${node_type}-${i}`,
        parent: null,
        children: [],
        internal: {
          type: node_type, // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify(banner),
          contentDigest: createContentDigest(banner),
        },
      })
    })

    const fetchProperties = async () =>
      await axios.get(`${GATSBY_API_HOST}properties`)
    const resProperties = await fetchProperties()

    node_type = "Property"

    resProperties.data.properties.map(async (property, i) => {
      createNode({
        ...property,
        id: `${node_type}-${i}`,
        parent: null,
        children: [],
        internal: {
          type: node_type, // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify(property),
          contentDigest: createContentDigest(property),
        },
      })
    })

    //Fetch offers
    const fetchOffers = async () => await axios.get(`${GATSBY_API_HOST}offers`)
    const resOffers = await fetchOffers()

    node_type = "Offer"

    resOffers.data.offers.map(async (offer, i) => {
      createNode({
        ...offer,
        id: `${node_type}-${i}`,
        parent: null,
        children: [],
        internal: {
          type: node_type, // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify(offer),
          contentDigest: createContentDigest(offer),
        },
      })
    })

    const fetchTestimonials = async () =>
      await axios.get(`${GATSBY_API_HOST}testimonials`)
    const resTestimonials = await fetchTestimonials()

    node_type = "Testimonial"

    resTestimonials.data.testimonials.map(async (testimonial, i) => {
      createNode({
        ...testimonial,
        id: `${node_type}-${i}`,
        parent: null,
        children: [],
        internal: {
          type: node_type, // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify(testimonial),
          contentDigest: createContentDigest(testimonial),
        },
      })
    })
  } catch (e) {
    console.log(e)
  }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  const fields = {
    name: { type: "String!" },
    area: { type: "String" },
    description: { type: "String" },
    price: { type: "String" },
    uid: { type: "String!" },
    timeFromDowntown: { type: "String" },
    nearToBeaches: { type: "String" },
    measures_unit: { type: "String" },
    isFeatured: { type: "Boolean!" },
    slug: { type: "String" },
    features: { type: "[Feature!]" },
    isProject: { type: "Boolean!" },
    isVisible: { type: "Boolean" },
    category: { type: "Category" },
    location: { type: "Location" },
    brochureFile: { type: "ExternalFile" },
    bluePrintFile: { type: "ExternalFile" },
    total_financing_months: { type: "Int" },
    selectable_financing_months: { type: "[Int]" },
    // Single Node
    coverImage: {
      type: "File",
      resolve: (source, args, context) => {
        return context.nodeModel.getNodeById({
          id: `${source.uid}-image`,
          type: "File",
        })
      },
    },
    // Array
    images: {
      type: "[File]",
      resolve: (source, args, context) => {
        const images = source.images.map((img, index) =>
          context.nodeModel.getNodeById({
            id: `${source.uid}-images-${index}`,
            type: "File",
          })
        )
        return images
      },
    },
  }
  const typeDefs = [
    "type Testimonial implements Node",
    schema.buildObjectType({
      name: "Testimonial",
      fields: {
        name: { type: "String!" },
        comment: { type: "String!" },
        avatar: {
          type: "File",
          resolve: (source, args, context) => {
            return context.nodeModel.getNodeById({
              id: `${source.uid}-image`,
              type: "File",
            })
          },
        },
      },
    }),
    "type Offer implements Node",
    schema.buildObjectType({
      name: "Offer",
      fields: {
        property: { type: "Property" },
        name: { type: "String!" },
        isActive: { type: "Boolean!" },
        file: {
          type: "File",
          resolve: (source, args, context) => {
            return context.nodeModel.getNodeById({
              id: `${source.uid}-image`,
              type: "File",
            })
          },
        },
      },
    }),
    "type Banner implements Node",
    schema.buildObjectType({
      name: "Banner",
      fields: {
        name: { type: "String!" },
        isActive: { type: "Boolean!" },
        image: {
          type: "File",
          resolve: (source, args, context) => {
            return context.nodeModel.getNodeById({
              id: `${source.uid}-image`,
              type: "File",
            })
          },
        },
      },
    }),
    "type Property implements Node",
    schema.buildObjectType({
      name: `Property`,
      fields: { ...fields, price: { type: "String" } },
      interfaces: ["Node"],
    }),
    "type Feature implements Node",
    schema.buildObjectType({
      name: `Feature`,
      fields: {
        name: { type: "String!" },
        icon: { type: "String" },
      },
    }),
    "type Category implements Node",
    schema.buildObjectType({
      name: `Category`,
      fields: {
        name: { type: "String!" },
        description: { type: "String" },
        isVisible: { type: "Boolean" },
        child_properties: { type: "[Property]" },
      },
    }),
    "type ExternalFile implements Node",
    schema.buildObjectType({
      name: `ExternalFile`,
      fields: {
        url: { type: "String" },
      },
    }),
    "type Location implements Node",
    schema.buildObjectType({
      name: `Location`,
      fields: {
        name: { type: "String!" },
        lat: { type: "String" },
        lng: { type: "String" },
      },
    }),
  ]

  createTypes(typeDefs)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  try {
    if (node.internal.type === "Property" && node?.coverImage?.url !== null) {
      if (node?.coverImage?.url) {
        const fileNode = await createRemoteFileNode({
          url: node?.coverImage?.url, // string that points to the URL of the image
          parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
          createNode, // helper function in gatsby-node to generate the node
          createNodeId: id => `${node.uid}-image`,
          getCache,
        })
        // if the file was created, extend the node with "localFile"
        if (fileNode) {
          createNodeField({ node, name: "localFile", value: fileNode.id })
        }
      }
    }

    if (node.internal.type === "Property" && node.images !== null) {
      node.images.map(async (image, index) => {
        if (image?.url) {
          const fileNode = await createRemoteFileNode({
            url: image.url, // string that points to the URL of the image
            parentNodeId: node.id,
            createNode, // helper function in gatsby-node to generate the node
            createNodeId: id => `${node.uid}-images-${index}`,
            getCache,
          })
          // if the file was created, extend the node with "localFile"
          if (fileNode) {
            createNodeField({ node, name: "localFile", value: fileNode.id })
          }
        }
      })
    }

    if (node.internal.type === "Testimonial" && node.avatar.url !== null) {
      if (node?.avatar?.url) {
        const fileNode = await createRemoteFileNode({
          url: node.avatar.url, // string that points to the URL of the image
          parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
          createNode, // helper function in gatsby-node to generate the node
          createNodeId: id => `${node.uid}-image`,
          getCache,
        })
        // if the file was created, extend the node with "localFile"
        if (fileNode) {
          createNodeField({ node, name: "localFile", value: fileNode.id })
        }
      }
    }

    if (node.internal.type === "Banner" && node.image.url !== null) {
      if (node?.image?.url) {
        const fileNode = await createRemoteFileNode({
          url: node.image.url, // string that points to the URL of the image
          parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
          createNode, // helper function in gatsby-node to generate the node
          createNodeId: id => `${node.uid}-image`,
          getCache,
        })
        // if the file was created, extend the node with "localFile"
        if (fileNode) {
          createNodeField({ node, name: "localFile", value: fileNode.id })
        }
      }
    }

    if (node.internal.type === "Offer") {
      if (node?.file?.url) {
        const fileNode = await createRemoteFileNode({
          url: node.file.url, // string that points to the URL of the image
          parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
          createNode, // helper function in gatsby-node to generate the node
          createNodeId: id => `${node.uid}-image`,
          getCache,
        })
        // if the file was created, extend the node with "localFile"
        if (fileNode) {
          createNodeField({ node, name: "localFile", value: fileNode.id })
        }
      }
    }

    if (node.internal.type === "Category") {
      if (node?.child_properties.length > 0) {
        node.child_properties.map(async property => {
          if (property?.coverImage?.url) {
            const fileNode = await createRemoteFileNode({
              url: property?.coverImage?.url, // string that points to the URL of the image
              parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
              createNode, // helper function in gatsby-node to generate the node
              createNodeId: id => `${node.uid}-image`,
              getCache,
            })
            if (fileNode) {
              createNodeField({ node, name: "localFile", value: fileNode.id })
            }
          }
        })

        // if the file was created, extend the node with "localFile"
      }
    }
  } catch (e) {
    console.log("error creating node ", e)
  }
}
