import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { Gallery } from "../../components/common/Gallery"

const GalleryTopography = () => {
  const { allFile } = useStaticQuery(graphql`
    query AllTopographyPhotos {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "services/topography" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          relativePath
        }
      }
    }
  `)

  return (
    <>
      <Gallery data={allFile.nodes} preview={false} />
    </>
  )
}

export default GalleryTopography
