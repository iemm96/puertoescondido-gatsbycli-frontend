import * as React from "react"
import SliderContainer from "./SliderContainer"
import { useState } from "react"
import { Element } from "react-scroll"
import { useBeachProjects } from "../hooks/useBeachProjects"
const subtitle: string = "Propiedades destacadas"

const BeachProjects = ({
  attached,
  fullScreen,
}: {
  attached?: boolean
  fullScreen?: boolean
}) => {
  const [properties, setProperties] = useState<any>([])
  const data = useBeachProjects()

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
    <Element name="beachProjects">
      {properties.length > 0 && (
        <div style={fullScreen ? fullScreenStyles : {}}>
          <SliderContainer
            title={"Proyectos de playa"}
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

export default BeachProjects
