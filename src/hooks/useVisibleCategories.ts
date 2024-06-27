import { graphql, useStaticQuery } from "gatsby"

export const useVisibleCategories = () => {
  const data = useStaticQuery(graphql`
    query visibleCategories {
      allCategory(filter: { isVisible: { eq: true } }) {
        nodes {
          child_properties {
            name
            description
            coverImage
          }
          name
        }
      }
    }
  `)

  return data
}
