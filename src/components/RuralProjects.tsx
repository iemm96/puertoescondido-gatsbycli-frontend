import * as React from "react"
import SliderContainer from "./SliderContainer"
import { useState } from "react"
import { Element } from "react-scroll"
import { graphql, useStaticQuery } from "gatsby"
const subtitle: string = "Propiedades destacadas"

const RuralProjects = ({
  attached,
  fullScreen,
}: {
  attached?: boolean
  fullScreen?: boolean
}) => {
  const [properties, setProperties] = useState<any>([])
  const data = useStaticQuery(graphql`
    query ruralProjects {
      allProperty(
        filter: {
          isFeatured: { eq: false }
          isVisible: { eq: true }
          category: { name: { eq: "Proyectos campestres" } }
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
    <Element name="ruralProjects">
      {properties.length > 0 && (
        <div style={fullScreen ? fullScreenStyles : {}}>
          <SliderContainer
            title={"Proyectos campestres"}
            fullScreen={fullScreen}
            attached={attached}
            subtitle={subtitle}
            data={properties}
            viewMoreButtonRedirectPath="propiedades"
          />
        </div>
      )}
    </Element>
  )
}

export default RuralProjects
