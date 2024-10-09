import * as React from "react"

type SlideType = {
  child: React.ReactElement
}

const Slide = ({ child }: SlideType) => {
  return <>{child}</>
}

export default Slide
