import * as React from "react"
import Seo from "../components/seo"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import loadable from "@loadable/component"

import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { ModalOffers, useModalOffers } from "../components/common/ModalOffers"
import FeaturedCategories from "../components/FeaturedCategories"
import InvestmentProjects from "../components/InvestmentProjects"
import RuralProjects from "../components/RuralProjects"
import CommercialProjects from "../components/CommercialProjects"

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
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(234,227,217,1) 0%, rgba(255,255,255,1) 100%)",
            height: {
              xs: "auto",
            },
            width: "100%",
            pt: 4,
            pb: 2,
          }}
        >
          <TopProjects />
        </Box>
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
