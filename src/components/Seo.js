import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { usePageVisibility } from "../hooks/usePageVisibility";

const Seo = (props) => {
  const isVisible = usePageVisibility();

  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          description
          keywords
          siteImage
          siteUrl
          title
          attentionMessage
          twitterUsername
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;
  const title = props.title || defaults.title;

  React.useEffect(() => {
    document.addEventListener("visibilitychange", function (e) {
      if (isVisible) {
        document.title = defaults.attentionMessage;
      } else {
        document.title = title;
      }
    });
  }, [isVisible]); //eslint-disable-line react-hooks/exhaustive-deps

  if (defaults.siteUrl === "" && typeof window !== "undefined") {
    defaults.siteUrl = window.location.origin;
  }

  if (defaults.siteUrl === "") {
    console.error("Please set a siteUrl in your site metadata!");
    return null;
  }

  const description = props.description || defaults.description;
  const url = new URL(props.path || "/", defaults.siteUrl);
  const image = props.image ? new URL(props.image, defaults.siteUrl) : false;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={defaults.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
