import * as React from "react"
import Seo from "../components/seo"
import Typography from "@mui/material/Typography"
import loadable from "@loadable/component"

import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { ModalOffers, useModalOffers } from "../components/common/ModalOffers"
import FeaturedCategories from "../components/FeaturedCategories"

const Layout = loadable(() => import("../components/layout"))
const Banner = loadable(() => import("../components/Banner"))
const TopProjects = loadable(() => import("../components/TopProjects"))
const MainInfoContent = loadable(() => import("../components/MainInfoContent"))
const IndexPage = ({ data }) => {
  const modalOffersProps = useModalOffers()

  return (
    <>
      <Seo title="Inicio" />
      <Layout scrollTrigger={true}>
        {data?.allOffer?.nodes[0]?.file && (
          <ModalOffers
            {...modalOffersProps}
            image={getImage(data.allOffer.nodes[0].file)}
            property={data?.allOffer.nodes[0].property}
          />
        )}
        <Banner />
        <TopProjects />
        <MainInfoContent />
        <FeaturedCategories attached={false} fullScreen={false} />
        <Typography
          sx={{ my: 6, fontWeight: 700 }}
          align="center"
          color="primary"
        >
          “No espere a invertir en Bienes Raíces, Invierta en Bienes Raíces y
          espere...”
        </Typography>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query OfferQuery {
    allOffer(filter: { isActive: { eq: true } }) {
      nodes {
        property {
          slug
        }
        file {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 50
              formats: [AVIF]
              width: 360
              height: 640
            )
          }
        }
      }
    }
  }
`
