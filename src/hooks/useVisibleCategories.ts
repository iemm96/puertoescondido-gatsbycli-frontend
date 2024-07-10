import { graphql, useStaticQuery } from "gatsby"

export const useVisibleCategories = () => {
  const data = useStaticQuery(graphql`
    query visibleCategories {
      allCategory(filter: { isVisible: { eq: true } }) {
        nodes {
          child_properties {
            name
            description
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
          }
          name
          description
        }
      }
    }
  `)

  return data
}
