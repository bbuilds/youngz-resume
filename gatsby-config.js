require("dotenv").config();

module.exports = {
  siteMetadata: {
    name: "Branden Youngs",
    description:
      "Fullstack / Jamstack Developer, DevOps tinkerer, Technical SEO Researcher, and overall web enthusiast forever surfing the cosmic waves.",
    keywords: ["React", "Gatsby", "JavaScript", "TypeScript"],
    siteUrl: "https://brandeny.me",
    siteImage: "https://brandeny.me/images/need-an-open-image.jpg",
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
