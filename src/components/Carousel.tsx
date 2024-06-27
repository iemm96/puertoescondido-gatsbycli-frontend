import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

type CarouselTypes = {
  styles?: React.CSSProperties
  images?: any
  data?: any
}

const StyledSlideDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity ease-in-out 0.4s;
  opacity: ${props => (props.animation ? 1 : 0)};
`
const Carousel = ({ styles }: CarouselTypes) => {
  const [images, setImages] = React.useState<[]>()
  const { allBanner } = useStaticQuery(graphql`
    query BannerQuery {
      allBanner(filter: { isActive: { eq: true } }) {
        nodes {
          image {
            childImageSharp {
              gatsbyImageData(
                breakpoints: [750, 1080, 1366, 1920]
                quality: 50
                formats: [WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    setImages(allBanner?.nodes)
  }, [allBanner])

  const [slideIndex, setSlideIndex] = React.useState(1)

  React.useEffect(() => {
    setTimeout(nextSlide, 5000)
  }, [slideIndex])

  const nextSlide = () => {
    if (slideIndex !== allBanner?.nodes.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === allBanner.nodes.length) {
      setSlideIndex(1)
    }
  }

  return (
    <>
      <div style={styles ? styles : {}}>
        {images &&
          images.map((image: any, index) => (
            <StyledSlideDiv animation={slideIndex === index + 1}>
              {/*@ts-ignore */}
              <GatsbyImage
                image={getImage(image?.image)}
                style={{
                  width: "100%",
                  height: 800,
                  objectPosition: "cover",
                }}
                alt={"data.title"}
              />
            </StyledSlideDiv>
          ))}
      </div>
    </>
  )
}

export default Carousel
