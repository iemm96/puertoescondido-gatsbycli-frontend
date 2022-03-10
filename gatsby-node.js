const axios = require('axios');
const crypto = require('crypto');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { GATSBY_API_HOST } = process.env;

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.sourceNodes = async ({ actions, createNodeId, node, store, cache }) => {
  const { createNode, createNodeField } = actions;
  const fetchRandomUser = async () => await axios.get(`http://localhost:8080/api/properties`);
  const res = await fetchRandomUser();
  res.data.properties.map(async ( property, i ) => {
    const propertyNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Properties`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      name: property.name,
      description: property.description,
      price: property.price,
      currency: property.currency,
      uid: property.uid,
      images: property?.images,
      features: property?.features,
      location: property?.location,
      width: property?.width,
      length: property?.length,
      isFeatured: property?.isFeatured,
      measures_unit: property?.measures_unit,
      coverImage: property?.coverImage
    }


    
    propertyNode.internal.contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(propertyNode))
      .digest(`hex`);;
    createNode(propertyNode);
  })

  return;
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Properties implements Node {
      property: Property
      coverImage: File @link(from: "fields.localFile")
    }
    type Property {
      title: String!
      coverImageUrl: String
      coverImageAlt: String
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
     node.internal.type === "Properties" &&
     node.coverImage.url !== null
   ) {

     const fileNode = await createRemoteFileNode({
       url: node.coverImage.url, // string that points to the URL of the image
       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
       createNode, // helper function in gatsby-node to generate the node
       createNodeId, // helper function in gatsby-node to generate the node id
       getCache,
     })
     console.log('file node!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ',fileNode)
     // if the file was created, extend the node with "localFile"
     if (fileNode) {
       createNodeField({ node, name: "localFile", value: fileNode.id })
     }
   }
 }catch (e) {
   console.log('error creating node ',e);
 }
}

/*
exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const fetchProperties = () => axios.get(`http://localhost:8080/api/properties`);
  const res = await fetchProperties();
  console.log( res.data.results );

  res.data.results.properties.map(( property, i ) => {
    const propertyNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Properties`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      name: property.name,
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(propertyNode))
      .digest(`hex`);

    propertyNode.internal.contentDigest = contentDigest;
    createNode(propertyNode);
  })

  return;
}*/