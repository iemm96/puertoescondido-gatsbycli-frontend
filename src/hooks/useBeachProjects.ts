import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const useBeachProjects = () => {
  const data = useStaticQuery(graphql`
    query beachProjects {
      allProperty(
        filter: {
          isFeatured: { eq: false }
          isVisible: { eq: true }
          category: { name: { eq: "Proyecto de playa" } }
        }
      ) {
        edges {
          node {
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  width: 280
                  placeholder: BLURRED
                  quality: 80
                  formats: [WEBP, AVIF]
                )
              }
            }
            name
            uid
            slug
            price
            measures_unit
            isFeatured
            isProject
          }
        }
      }
    }
  `)

  return data
}
