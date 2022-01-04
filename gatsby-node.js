const fetch = require("node-fetch");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Download data from a remote API.
  const blogPostsResponse = await fetch(
    `${process.env.SECRET_BLOG_POSTS_URL}/api/posts`
  );

  const data = await blogPostsResponse.json();

  if (data) {
    data.forEach((post) =>
      createNode({
        id: createNodeId(`${post.slug}`),
        parent: null,
        children: [],
        internal: {
          type: `BlogPosts`,
          content: JSON.stringify(post),
          contentDigest: createContentDigest(post),
        },
        title: post.title,
        tags: post.tags,
        date: post.date,
        featuredImageUrl: `${process.env.SECRET_BLOG_POSTS_URL}${post.featuredImage}`,
        excerpt: post.excerpt,
        slug: post.slug,
        url: `${process.env.SECRET_BLOG_POSTS_URL}/${post.slug}`,
      })
    );
  }

  return;
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type BlogPosts implements Node {
      coverImg: File @link(from: "fields.localFile")
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all BlogPosts nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === "BlogPosts" && node.featuredImgUrl !== null) {
    const fileNode = await createRemoteFileNode({
      url: node.featuredImageUrl, // string that points to the URL of the image
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
