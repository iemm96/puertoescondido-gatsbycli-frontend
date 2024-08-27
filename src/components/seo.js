/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, props }) {
  const { site, featuredImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        featuredImage: file(
          absolutePath: { glob: "**/src/images/og_image.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage =
    props?.featuredImage ?? featuredImage?.childImageSharp?.gatsbyImageData

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "og:image",
          content: `https://res.cloudinary.com/inmobiliaria-puerto-escondido/image/upload/v1721458463/og_image_py23fi.png`,
        },
        {
          name: "og:image:width",
          content: `${ogImage?.width}`,
        },

        {
          name: "og:image:height",
          content: `${ogImage?.height}`,
        },
        {
          name: "og:site_name",
          content: site?.siteMetadata?.og?.siteName,
        },
        {
          name: "og:url",
          content: `${site?.siteMetadata?.siteUrl}`,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
