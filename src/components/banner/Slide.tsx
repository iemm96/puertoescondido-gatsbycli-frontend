import * as React from 'react';
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import SlideType from "../../types/SlideType"

const Slide = ({child}:SlideType) => {
  const {backgroundImage} = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: {eq: "banner-1.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData(
          width: 2000, 
          quality: 90, 
          webpOptions: {quality: 90})
        }
      }
    }
  `);

  const pluginImage = getImage(backgroundImage);

  return(
    <>
      <BgImage image={pluginImage}>
        {child}
      </BgImage>

    </>
  )
}

export default Slide;
