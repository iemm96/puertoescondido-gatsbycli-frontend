import * as React from "react";
import BackgroundImage from "./common/BackgroundImage";
import styled from "styled-components";

type CarouselTypes = {
  styles?: React.CSSProperties;
}

const StyledSlideDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity ease-in-out 0.4s;
  opacity: ${props => props.animation ? 1 : 0};
`;

const dataSlider = [
  {
    image: "banner-1.jpg",
  },
  {
    image: "banner-3.jpg",
  },
  {
    image: "banner-5.JPG",
  }
]
const Carousel = ({ styles }:CarouselTypes) => {

  const [slideIndex, setSlideIndex] = React.useState(1);

  React.useEffect(() => {
    setTimeout(nextSlide,5000);
  },[slideIndex]);

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === dataSlider.length){
      setSlideIndex(1)
    }
  }

  return(
    <>
      <div style={styles ? styles : {}}>
        {
          dataSlider.map((obj,index) => (
            <StyledSlideDiv animation={slideIndex === index + 1}>
              <BackgroundImage key={index} filename={obj.image}/>
            </StyledSlideDiv>
          ))
        }
      </div>
    </>
  )
}

export default Carousel;