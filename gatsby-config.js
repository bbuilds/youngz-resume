require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Branden's Resume on the Web",
    attentionMessage: "Bye forever!",
    description:
      "Fullstack / Jamstack Developer, DevOps tinkerer, Technical SEO Researcher, and overall web enthusiast.",
    keywords: ["React", "Gatsby", "JavaScript", "TypeScript"],
    siteUrl: "https://brandeny.me",
    siteImage: "/og.png",
    twitterUsername: "@brandenbuilds",
    lang: `en`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};
