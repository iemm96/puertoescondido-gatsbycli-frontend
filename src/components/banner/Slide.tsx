import * as React from 'react';
import BackgroundImage from "../common/BackgroundImage";
import SlideType from "../../types/SlideType";

const Slide = ({imageName}:SlideType) => {
  return(
    <>
      <BackgroundImage filename={imageName}/>
    </>
  )
}

export default Slide;
