const axios = require('axios');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { GATSBY_API_HOST } = process.env;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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

  data.allProperty.nodes.forEach( node => {
    createPage({
      path: `/propiedades/${ node.slug }`,
      component: require.resolve("./src/templates/PropertyDetails.tsx"),
      context: { slug: node.slug },
    })
  } )


}

exports.sourceNodes = async ({ actions, createNodeID, createContentDigest }) => {
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Location implements Node {
      name: String!
    }
    type Feature implements Node {
      name: String!
    }
    type Image implements Node {
      url: String!
    }
    type Property implements Node {
      uid: String!
      name: String!
      description: String!
      price: String!
      measures_unit: String!
      isFeatured: Boolean!
      location: Location!
      features: Feature!
      slug: String!
      images: Image!
      area: String!
      coverImage: File @link(from: "fields.localFile")
    }
    type Project implements Node {
      uid: String!
      name: String!
      description: String!
      price: String!
      isFeatured: Boolean!
      isProject: Boolean!
      location: Location!
      features: Feature!
      slug: String!
      measures_unit: String!
      area: String!
      coverImage: File @link(from: "fields.localFile")
    }
  `)
}

exports.onCreateNode = async ({
                                node,
                                actions: { createNode, createNodeField },
                                createNodeId,
                                getCache,
                              }) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode



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
   }catch (e) {
     console.log('error creating node ',e);
   }

  try{

    if (
        node.internal.type === "Project" &&
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
  }catch (e) {
    console.log('error creating node ',e);
  }
}

