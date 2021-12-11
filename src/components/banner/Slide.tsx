import * as React from 'react';
import BackgroundImage from "../common/BackgroundImage";
import SlideType from "../../types/SlideType";

const Slide = ({child,imageName}:SlideType) => {
  console.log(imageName)
  return(
    <>
      <BackgroundImage filename={imageName} child={child}/>
    </>
  )
}

export default Slide;
