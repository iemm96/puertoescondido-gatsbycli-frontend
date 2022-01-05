import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import withTheme from "../components/theme"
import Banner from "../components/banner"
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from "../theme/Theme";
import PropertySlider from "../components/PropertySlider"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby"

// @ts-ignore
import IconGastronomy from "./../images/icons/gastronomy.svg";

// @ts-ignore
import IconBeach from "./../images/icons/Beach.svg";

// @ts-ignore
import IconHiking from "./../images/icons/hiking.svg";

// @ts-ignore
import IconTurtle from "./../images/icons/turtle.svg";

// @ts-ignore
import IconFolclore from "./../images/icons/Folklore.svg";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img_puerto_escondido.JPG" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return(
    <>
      <ThemeProvider theme={defaultTheme}>
        <Seo title="Home" />
        <Layout>
          <Banner/>
          <Box sx={{
            background: 'linear-gradient(0deg, rgba(234,227,217,1) 0%, rgba(255,255,255,1) 100%)',
            height: 600,
            width: '100%'
          }}>
            <Container maxWidth="xl">
              <PropertySlider/>
            </Container>
          </Box>
          <Box sx={{
            background: '#F2FBFC',
            height: 420,
            width: '100%',
            padding: '2rem 0'
          }}>
            <Container maxWidth="xl">
              <Grid container>
                <Grid item sm={12} md={6}>
                  <Typography sx={{fontWeight: 600}} variant="h5">Puerto Escondido, Oaxaca.</Typography>
                  <Grid container>
                    <Grid item>
                      <Typography sx={{mb: 2}} variant="h6">Invierte en este destino turístico.</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Typography sx={{mb: 3}} variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor velit adipiscing lorem tellus
                        blandit. In suspendisse a ut id aliquam. Enim vitae aliquet sit sit lectus ultrices urna. Donec orci,
                        ridiculus blandit fames tristique. At lobortis.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid sx={{ mb:4 }} container spacing={4}>
                    <Grid item display="flex" alignItems="center" direction="column">
                      <IconBeach width={40}/>
                      <Typography variant="label">Playas</Typography>
                    </Grid>
                    <Grid item display="flex" alignItems="center" direction="column">
                      <IconGastronomy width={40}/>
                      <Typography variant="label">Gastronomía</Typography>
                    </Grid>
                    <Grid item display="flex" alignItems="center" direction="column">
                      <IconHiking width={40}/>
                      <Typography variant="label">Senderismo</Typography>
                    </Grid>
                    <Grid item display="flex" alignItems="center" direction="column">
                      <IconTurtle width={40}/>
                      <Typography variant="label">Vida salvaje</Typography>
                    </Grid>
                    <Grid item display="flex" alignItems="center" direction="column">
                      <IconFolclore width={40}/>
                      <Typography variant="label">Folclore</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Button variant="contained" color="primary">
                      Contáctanos
                    </Button>
                  </Grid>
                </Grid>
                <Grid justifyContent="center" display="flex" item sm={12} md={6}>
                  <div
                    data-sal="slide-up"
                    data-sal-delay="1200"
                    data-sal-duration="600"
                    data-sal-easing="ease"
                  >
                    <Img
                      style={{
                        borderRadius: 16,
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        marginTop: -80
                      }}
                      quality={100}
                      fixed={data.file.childImageSharp.fixed}
                      alt="Gatsby Docs are awesome"
                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default withTheme(IndexPage)
