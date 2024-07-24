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
  const [images, setImages] = React.useState<any>()
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
    const banners = [...allBanner.nodes]
    banners.push({
      video: {
        src: "https://res.cloudinary.com/inmobiliaria-puerto-escondido/video/upload/v1721460456/0720_qd8vss.mov",
        type: "video/mp4",
      },
    })
    setImages(banners)
  }, [allBanner])

  const [slideIndex, setSlideIndex] = React.useState(1)

  React.useEffect(() => {
    setTimeout(nextSlide, 5000)
  }, [slideIndex])

  const nextSlide = () => {
    if (slideIndex !== allBanner?.nodes.length + 1) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === allBanner.nodes.length + 1) {
      setSlideIndex(1)
    }
  }

  return (
    <>
      <div style={styles ? styles : {}}>
        {images &&
          images.map((item: any, index) =>
            item?.image ? (
              <StyledSlideDiv animation={slideIndex === index + 1}>
                <GatsbyImage
                  image={item?.image && getImage(item.image)}
                  style={{
                    width: "100%",
                    height: 800,
                    objectPosition: "cover",
                  }}
                  alt={"data.title"}
                />
              </StyledSlideDiv>
            ) : (
              <StyledSlideDiv animation={slideIndex === index + 1}>
                <video
                  autoPlay
                  muted
                  loop
                  style={{
                    width: "100%",
                    height: 800,
                    objectFit: "cover",
                  }}
                >
                  <source
                    src="https://res.cloudinary.com/inmobiliaria-puerto-escondido/video/upload/v1721460456/0720_qd8vss.mov"
                    type="video/mp4"
                  />
                  Your browser does not support HTML5 video.
                </video>
              </StyledSlideDiv>
            )
          )}
      </div>
    </>
  )
}

export default Carousel
