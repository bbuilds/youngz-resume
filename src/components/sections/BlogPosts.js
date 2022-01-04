import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaLink } from "react-icons/fa";
import Heading from "../Heading";

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query RecentPosts {
      allBbuildsBlogPosts(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          title
          tags
          slug
          id
          featuredImg {
            childrenImageSharp {
              gatsbyImageData
            }
          }
          date
          excerpt
        }
      }
    }
  `);

  const posts = data.allBbuildsBlogPosts.nodes;

  return (
    <section id="recent-posts" className="py-10 lg:py-20">
      <div className="container">
        <Heading headinglevel={2}>Recent Posts</Heading>
        <p className="text-sm">
          These posts are pulled from my dev blog API and link externally to
          that site
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-4">
          {posts.map((post) => {
            const { title, tags, id, url, date, excerpt, featuredImg } = post;
            return (
              <div key={id} className="posts-grid__item">
                <article className={`relative group`}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
                  >
                    <FaLink className="absolute" color="#FFF" size="5rem" />
                    <GatsbyImage
                      className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                      alt={title}
                      image={featuredImg.childrenImageSharp.gatsbyImageData}
                    />
                    <span className="sr-only">{title}</span>
                  </a>
                  <h2 className="my-3 leading-none text-sm">{title}</h2>
                  <div className="post-meta mb-2">
                    <p className="text-small">
                      <span>
                        {new Date(date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </p>
                  </div>

                  <p>{excerpt}</p>
                  <p className="pb-0 flex text-xs font-semibold">
                    {tags.map((x) => (
                      <span key={x} className="mr-2">
                        #{x}
                      </span>
                    ))}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
