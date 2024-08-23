import * as React from "react"
import SliderContainer from "./SliderContainer"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

const title: string = "¡Tu mejor opción!"
const subtitle: string = "Propiedades destacadas"

const FeaturedProperties = ({
  attached,
  fullScreen,
}: {
  attached?: boolean
  fullScreen?: boolean
}) => {
  const [properties, setProperties] = useState<any>([])

  const data = useStaticQuery(graphql`
    query FeaturedItems {
      allProperty(
        filter: { isFeatured: { eq: true }, isVisible: { eq: true } }
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

  React.useEffect(() => {
    if (data?.allProperty?.edges) {
      setProperties(data.allProperty.edges)
    }
  }, [data])

  const fullScreenStyles: React.CSSProperties = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    height: "100%",
    top: 0,
  }

  return (
    <>
      {properties.length > 0 && (
        <div style={fullScreen ? fullScreenStyles : {}}>
          <SliderContainer
            title={title}
            fullScreen={fullScreen}
            attached={attached}
            subtitle={subtitle}
            data={properties}
            viewMoreButtonRedirectPath="propiedades"
          />
        </div>
      )}
    </>
  )
}

export default FeaturedProperties
