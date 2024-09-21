import * as React from "react"
import Seo from "../../components/seo"
import Container from "@mui/material/Container"
import { Box, Typography, useTheme } from "@mui/material"
import Layout from "../../components/layout"
import Grid from "@mui/material/Grid"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import { graphql, navigate } from "gatsby"
import { fetchRecord } from "../../actions/fetchRecord"
import CoverImage from "../../components/common/CoverImage"
import withTheme from "../../components/theme"
import StyledGradientSection from "../../styled/StyledGradientSection"
import { Gallery } from "../../components/common/Gallery"
import Header from "../../components/Header"
import SplashScreen from "../../components/common/SplashScreen"
import StyledButton from "../../styled/StyledButton"
import PropertyCard from "../../components/PropertyCard"
import {
  ModalEstimates,
  useModalEstimates,
} from "../../components/common/ModalEstimates"

type marksType = {
  value: number
  label: string
}
const EstimateDetails = ({ property, data }) => {
  const theme = useTheme()
  const [propertyData, setPropertyData] = React.useState(null)
  const [monthlyPay, setMonthlyPay] = React.useState<any | number>(null)
  const [currentValueSlider, setCurrentValueSlider] = React.useState<number>(12)
  const [months, setMonths] = React.useState<marksType[] | null>(null)
  const [galleryImages, setGalleryImages] = React.useState<any[]>([])
  const [priceInterestAnnual, setPriceInterestAnual] = React.useState<any>(null)
  const [firstPayment, setFirstPayment] = React.useState<any>(null)
  const [pricePerSquareMeter, setPricePerSquareMeter] =
    React.useState<any>(null)
  const [zones, setZones] = React.useState<any>([])
  const [selectedChildProperty, setSelectedChildProperty] =
    React.useState<any>(null)

  const modalEstimatesProps = useModalEstimates()

  React.useEffect(() => {
    getProperty().then()
  }, [])

  const getPricePerSquareMeter = (
    selectable_financing_months: any,
    currentSelectedMonths: any
  ) => {
    if (!selectable_financing_months) return
    const result = selectable_financing_months.find(
      ({ elegibleMonths }) => elegibleMonths === currentSelectedMonths
    )

    return result?.price_per_square_meter
  }

  React.useEffect(() => {
    const resultPpsm = getPricePerSquareMeter(
      propertyData?.selectable_financing_months,
      currentValueSlider
    )

    let propertyTotalPrice: number
    if (resultPpsm) {
      setPricePerSquareMeter(resultPpsm)
      propertyTotalPrice = resultPpsm * propertyData?.area
    } else {
      propertyTotalPrice = propertyData?.price * propertyData?.area
      setPricePerSquareMeter(propertyData?.price)
    }

    let annualInterestTotal: number

    if (priceInterestAnnual) {
      annualInterestTotal = priceInterestAnnual * (currentValueSlider / 12)
    } else {
      annualInterestTotal = currentValueSlider / 12
    }

    if (propertyData?.price) {
      if (currentValueSlider === 0) {
        setMonthlyPay(propertyTotalPrice)
      } else {
        setMonthlyPay(
          (propertyTotalPrice + annualInterestTotal) / currentValueSlider
        )
      }
    }

    let firstPaymentPercentage = 10
    let a =
      ((propertyTotalPrice + annualInterestTotal) * firstPaymentPercentage) /
      100

    if (annualInterestTotal) {
      setFirstPayment(
        (propertyTotalPrice + annualInterestTotal - a) / currentValueSlider
      )
    } else {
      setFirstPayment(null)
    }
  }, [propertyData, currentValueSlider])

  const getProperty = async () => {
    const propertyResult = await fetchRecord("properties/bySlug", property)

    if (propertyResult?.property?.selectable_financing_months) {
      const arrMonths: marksType[] = [
        {
          value: 0,
          label: "De contado",
        },
      ]

      if (propertyResult?.property?.price_annual_interest) {
        setPriceInterestAnual(propertyResult?.property?.price_annual_interest)
      }

      propertyResult?.property?.selectable_financing_months.map((item: any) =>
        arrMonths.push({
          value: item?.elegibleMonths,
          label: `${item?.elegibleMonths} meses`,
        })
      )

      if (propertyResult?.property?.zones) {
        setZones(propertyResult.property.zones)
      }

      setMonths(arrMonths)
    }

    //If contains bluePrint Image
    if (propertyResult.property?.aerialImage?.url) {
      setGalleryImages(prevState => [
        ...prevState,
        propertyResult.property?.aerialImage,
      ])
    }

    //If contains aerial Image
    if (propertyResult.property?.bluePrintImage?.url) {
      setGalleryImages(prevState => [
        ...prevState,
        propertyResult.property?.bluePrintImage,
      ])
    }

    if (
      propertyResult.property?.images &&
      propertyResult.property?.images.length > 0
    ) {
      setGalleryImages(prevState => [
        ...prevState,
        ...propertyResult.property?.images,
      ])
    }

    setPropertyData(propertyResult.property)
  }

  return (
    <>
      <SplashScreen duration={4} />
      <Seo title="Cotizador de propiedad" />
      <Layout>
        <Header />
        {propertyData && (
          <>
            <ModalEstimates
              {...modalEstimatesProps}
              property={selectedChildProperty}
            />
            <CoverImage
              data={{
                image: propertyData?.coverImage?.url,
                price: propertyData?.price,
                name: propertyData?.name,
                currency: propertyData?.currency,
                location: propertyData?.location?.name,
                features: propertyData?.features,
              }}
            />
            <Container sx={{ mt: 2 }} maxWidth="xl">
              <Typography variant="subtitle1">Simulador</Typography>
              <Typography sx={{ fontWeight: 600, mb: 1 }} variant="h5">
                Elige una propiedad...
              </Typography>
              {zones.map((zone: any, index: number) => {
                return (
                  <Container key={`container-${index}`}>
                    <Typography variant="subtitle1" sx={{ mt: 4, mb: 1 }}>
                      {zone.name}
                    </Typography>
                    <Grid spacing={2} container>
                      {zone?.child_properties &&
                        zone.child_properties.map(
                          (property: any, indexProperties: number) => {
                            return (
                              <Grid item xs={12} md={6} lg={3}>
                                <PropertyCard
                                  key={`property-${indexProperties}`}
                                  data={property}
                                  customOnClick={() => {
                                    setSelectedChildProperty(property)
                                    modalEstimatesProps.handleModalEstimates()
                                  }}
                                  showEstimate
                                  autoHeight
                                />
                              </Grid>
                            )
                          }
                        )}
                    </Grid>
                  </Container>
                )
              })}
            </Container>
            <StyledGradientSection
              sx={{
                mt: 4,
                pb: 4,
              }}
            >
              <Container maxWidth="xl">
                <Typography sx={{ fontWeight: 600, mb: 1 }} variant="h5">
                  Galería
                </Typography>
                <Grid item justifyContent="center" display="flex">
                  {data?.property?.images && (
                    <Gallery data={data.property.images} preview={true} />
                  )}
                </Grid>
              </Container>
            </StyledGradientSection>
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <StyledButton
                sx={{
                  mt: 4,
                  mb: 8,
                }}
                onClick={() => navigate("/")}
                startIcon={<ChevronLeft />}
                variant="outlined"
              >
                Volver al catálogo
              </StyledButton>
            </Box>
          </>
        )}
      </Layout>
    </>
  )
}

export default withTheme(EstimateDetails)

export const query = graphql`
  query ProjectsDetailsPage2($slug: String) {
    property(slug: { eq: $slug }) {
      name
      uid
      description
      images {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`
