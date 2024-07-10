import * as React from "react"
import SliderContainer from "./SliderContainer"
import { useState } from "react"
import { Element } from "react-scroll"
import { useVisibleCategories } from "../hooks/useVisibleCategories"

const FeaturedCategories = ({
  attached,
  fullScreen,
}: {
  attached?: boolean
  fullScreen?: boolean
}) => {
  const [categories, setcategories] = useState<any>([])
  const data = useVisibleCategories()

  React.useEffect(() => {
    if (data?.allCategory?.nodes) {
      setcategories(data.allCategory.nodes)
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
      {categories.length > 0 && (
        <div style={fullScreen ? fullScreenStyles : {}}>
          {categories.map(category => (
            <Element name={category.name}>
              <SliderContainer
                title={category.name}
                fullScreen={fullScreen}
                attached={attached}
                subtitle={category?.description}
                data={category.child_properties}
                viewMoreButtonRedirectPath="propiedades"
              />
            </Element>
          ))}
        </div>
      )}
    </>
  )
}

export default FeaturedCategories
