import * as React from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { graphql, useStaticQuery } from "gatsby"
import { Gallery } from "../../components/common/Gallery"

const GalleryDrone = () => {
    const { allFile } = useStaticQuery(graphql`
        query AllDronePhotos {
            allFile(
                filter: {
                    extension: { regex: "/(jpg)/" }
                    relativeDirectory: { eq: "services/drone" }
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

export default GalleryDrone
