const axios = require('axios');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { GATSBY_API_HOST } = process.env;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {

    const { data } = await graphql(`
      query Properties {
              allProperty {
                  nodes {
                      coverImage {
                          childImageSharp {
                              gatsbyImageData(width: 280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                          }
                      }
                      name
                      price
                      uid
                      measures_unit
                      isFeatured
                      slug
                      location {
                          name
                      }
                      features {
                          name
                      }
                  }
              }
          }
    `);

    const dataProjects = await graphql(`
      query Projects {
          allProject {
            nodes {
              name
              uid
              measures_unit
              isFeatured
              slug
              location {
                name
              }
              coverImage {
                  childImageSharp {
                      gatsbyImageData(width: 280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
              }
              images {
                childrenImageSharp {
                  gatsbyImageData(formats: AUTO)
                }
              }
        
            }
          }
        }
    `);


    data.allProperty.nodes.forEach( node => {
      createPage({
        path: `/propiedad/${ node.slug }`,
        component: require.resolve("./src/templates/PropertyDetails.tsx"),
        context: { slug: node.slug },
      })
    } );

    dataProjects.data.allProject.nodes.forEach( node => {
      createPage({
        path: `/proyecto/${ node.slug }`,
        component: require.resolve("./src/templates/ProjectDetails.tsx"),
        context: { slug: node.slug },
      })
    } );
  }catch (e) {
    console.log( e );
  }
  
}

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions;

  try {

    const fetchProjects = async () => await axios.get(`${ GATSBY_API_HOST }projects`);
    const resProjects = await fetchProjects();

    let node_type = 'Project';

    resProjects.data.projects.map(async ( project, i ) => {
      createNode({
        ...project,
        id: `${node_type}-${i}`,
        parent: null,
        children: [],
        internal: {
          type: node_type, // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify( project ),
          contentDigest: createContentDigest( project )
        },
      })
    });

    const fetchProperties = async () => await axios.get(`${ GATSBY_API_HOST }properties`);
    const resProperties = await fetchProperties();

    node_type = 'Property';

    resProperties.data.properties.map(async ( property, i ) => {
      createNode({
        ...property,
        id: `${node_type}-${i}`,
        parent: null,
        children: [],
        internal: {
          type: node_type, // name of the graphQL query --> allRandomUser {}
          content: JSON.stringify( property ),
          contentDigest: createContentDigest( property )
        },
      })
    });

  }catch (e) {
    console.log(e)
  }

  return;
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  const fields = {
    name: { type: 'String!' },
    area: { type: 'String!' },
    description: { type: 'String!' },
    price: { type: 'String!' },
    uid: { type: 'String!' },
    measures_unit: { type: 'String!' },
    isFeatured: { type: 'Boolean!' },
    slug: { type: 'String!' },
    features: { type: "Feature!" },
    isProject: { type: "Boolean!" },
    location: { type: "Location!" },
    // Single Node
    coverImage: {
      type: 'File',
      resolve: (source, args, context, info) => {
        return context.nodeModel.getNodeById({
          id: `${source.uid}-image`,
          type: 'File',
        })
      }
    },
    // Array
    images: {
      type: '[File]',
      resolve: (source, args, context, info) => {
        const images = source.images.map((img, index) => (
            context.nodeModel.getNodeById({
              id: `${source.uid}-images-${index}`,
              type: 'File',
            })
        ))
        return images
      }
    },
  }
  const typeDefs = [
      "type Project implements Node",
    schema.buildObjectType({
      name: `Project`,
      fields: fields
    }),
    "type Property implements Node",
    schema.buildObjectType({
      name: `Property`,
      fields: fields
    }),
    "type Feature implements Node",
    schema.buildObjectType({
      name: `Feature`,
      fields: {
        name: { type: 'String!' },
      }
    }),
    "type Location implements Node",
    schema.buildObjectType({
      name: `Location`,
      fields: {
        name: { type: 'String!' },
      }
    }),
  ];

  createTypes( typeDefs )
}

exports.onCreateNode = async ({
                                node,
                                actions: { createNode, createNodeField },
                                createNodeId,
                                getCache,
                              }) => {

  try{
    if (
        node.internal.type === "Property" &&
        node.coverImage.url !== null
    ) {

      const fileNode = await createRemoteFileNode({
        url: node.coverImage.url, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        getCache,
      })

      // if the file was created, extend the node with "localFile"
      if (fileNode) {
        createNodeField({ node, name: "localFile", value: fileNode.id })
      }
    }
    if (
        node.internal.type === "Project" &&
        node.coverImage.url !== null
    ) {

      const fileNode = await createRemoteFileNode({
        url: node.coverImage.url, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId: (id) => `${node.uid}-image`,
        getCache,
      })
      // if the file was created, extend the node with "localFile"
      if (fileNode) {
        createNodeField({ node, name: "localFile", value: fileNode.id })
      }
    }

    if (
        node.internal.type === "Project" &&
        node.images !== null
    ) {

      node.images.map( async  (image, index) => {
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
      });

    }
  }catch (e) {
    console.log('error creating node ',e);
  }
}

