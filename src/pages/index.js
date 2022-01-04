import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import withTheme from "../components/theme"
import Banner from "../components/banner"
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from "../theme/Theme";
import PropertySlider from "../components/PropertySlider"
import { Container, Typography } from "@mui/material"
const IndexPage = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Seo title="Home" />
      <Layout>
        <Banner/>
        <Container maxWidth="xl">
          <Typography variant="h6">¡Tu mejor opción!</Typography>
          <Typography sx={{fontWeight: 600}} variant="h5">Propiedades destacadas</Typography>
          <PropertySlider/>
        </Container>


      </Layout>
    </ThemeProvider>
  </>
)

export default withTheme(IndexPage)
