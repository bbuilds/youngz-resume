const fetch = require("node-fetch");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

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
        featuredImage: post.featuredImage,
        excerpt: post.excerpt,
        slug: post.slug,
      })
    );
  }

  return;
};
