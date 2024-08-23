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
      let categoriesArray = data.allCategory.nodes
      let newCategoriesArray = []
      if (categoriesArray) {
        newCategoriesArray = categoriesArray.map(category => {
          if (category.child_properties) {
            category.child_properties.map(childProperty => {
              if (category.coverImages) {
                const result = category.coverImages.find(ci => {
                  console.log(
                    "ci?.childImageSharp?.parent?.id ",
                    childProperty?._id
                  )
                  if (ci?.childImageSharp?.parent?.id) {
                    return (
                      ci.childImageSharp.parent.id ===
                      `${childProperty._id}-cover-image`
                    )
                  }
                })
                childProperty.coverImage = result
              }
              return childProperty
            })
          }
          return category
        })
        setcategories(newCategoriesArray)
      } else {
        setcategories([])
      }
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
                viewMoreButtonText={`Ver más propiedades de ${category.name}`}
                viewMoreButton={
                  category.child_properties.length > 3 && category?.slug
                }
                viewMoreButtonRedirectPath={`propiedades/${category?.slug}`}
              />
            </Element>
          ))}
        </div>
      )}
    </>
  )
}

export default FeaturedCategories
