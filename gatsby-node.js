const fetch = require("node-fetch");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

// https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
        type BbuildsBlogPosts implements Node {
          featuredImg: File @link(from: "fields.localFile")
        }
  
        type FeaturedImg {
          thumbnailImgUrl: String
        }
      `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all BbuildsBlogPosts nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "BbuildsBlogPosts" &&
    node.featuredImageURL !== null
  ) {
    console.log("node.featuredImageURL", node.featuredImageURL);
    const fileNode = await createRemoteFileNode({
      url: node.featuredImageURL, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    });
    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  }
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Download data from a remote API.
  const blogPostsResponse = await fetch(
    `https://www.brandenbuilds.com/api/posts`
  );

  const data = await blogPostsResponse.json();

  if (data) {
    data.forEach((post) =>
      createNode({
        id: createNodeId(`${post.slug}`),
        parent: null,
        children: [],
        internal: {
          type: `BbuildsBlogPosts`,
          content: JSON.stringify(post),
          contentDigest: createContentDigest(post),
        },
        title: post.title,
        tags: post.tags,
        date: post.date,
        featuredImageURL: `https://www.brandenbuilds.com${post.featuredImage}`,
        excerpt: post.excerpt,
        slug: post.slug,
      })
    );
  }

  return;
};
