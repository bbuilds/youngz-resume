import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaLink } from "react-icons/fa";
import Heading from "../Heading";

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allBlogPosts(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          url
          title
          slug
          excerpt
          tags
          id
          date(formatString: "MMMM DD, YYYY")
          coverImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const posts = data.allBlogPosts.nodes;
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <Heading headinglevel={2}>Recent Posts</Heading>
        <p className="mb-10" data-aos="fade-up">
          These posts are pulled from my dev blog on my freelance website and
          are linked externally to them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => {
            const { title, tags, id, url, date, excerpt, coverImg } = post;
            const image = getImage(coverImg);
            return (
              <div
                key={id}
                className="posts-grid__item"
                data-aos="fade-right"
                data-aos-delay={`${index}50`}
              >
                <article className={`relative group`}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg display flex items-center justify-center mb-6"
                  >
                    <FaLink
                      className="absolute"
                      color="var(--yellow)"
                      size="5rem"
                    />
                    <GatsbyImage
                      className="w-full h-full object-cover rounded-lg hover:opacity-25 duration-200"
                      alt={title}
                      image={image}
                    />
                    <span className="sr-only">{title}</span>
                  </a>
                  <h2 className="my-3 leading-tight text-lg">{title}</h2>
                  <div className="post-meta mb-2">
                    <p>
                      <span className="text-sm">{date}</span>
                    </p>
                  </div>

                  <p className="text-sm">{excerpt}</p>
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
