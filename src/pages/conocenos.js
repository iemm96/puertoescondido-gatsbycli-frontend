import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GradientBox from "../components/GradientBox";
import { graphql, useStaticQuery } from "gatsby";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import IconTarget from './../images/icons/target.svg';
import IconVision from './../images/icons/vision.svg';
import IconValues from './../images/icons/values.svg';
import { StaticImage } from "gatsby-plugin-image";

const ConocenosPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img-conocenos.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 610) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return(
    <>
      <Seo title="Conócenos" />
      <Layout>
        <GradientBox position="absolute" height={400}/>
        <Container maxWidth="xl">
          <Paper
            sx={{
              p: {
                xs: 2,
                md: 4
              },
              mt: {
                xs: 18,
                md: 20
              }
            }}
            elevation={1}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <Stack direction="column">
                  <Typography sx={{ mb:2 }} variant="h4">
                    Conócenos
                  </Typography>
                  <Typography variant="body2">
                    Somos una empresa 100% mexicana originaria de la ciudad de Puerto Escondido, que se dedica a la intermediación en la compra - venta de inmuebles, terrenos, ranchos y fraccionamientos a buen precio, en Puerto Escondido y sus zonas aledañas.{<br/>}
                    {<br/>}
                    Brindamos la confianza que usted necesita en la realización de compra - venta de inmuebles, encargándonos que dichas operaciones se lleven a cabo con toda la seguridad jurídica  que se requiera a la hora de comprar o vender un inmueble.{<br/>}
                    {<br/>}
                    Contamos con un equipo de colaboradores con 25 años de experiencia en el ramo inmobiliario, que le darán esa seguridad y garantía que necesita a la hora de invertir en un inmueble con nosotros que será su patrimonio.
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                sx={{
                  justifyContent: 'center',
                  display: 'flex'
                }}
                item
                xs={12}
                md={6}
              >
                <StaticImage
                  src="../images/img-conocenos.jpg"
                  formats={['auto', 'webp', 'avif']}
                  style={{
                    borderRadius: 16,
                  }}
                  quality={100}
                  fixed={data.file.childImageSharp.fixed}
                  alt="Puerto escondido"
                />
              </Grid>
            </Grid>
          </Paper>
          <Grid sx={{ mt: 5 }} spacing={2} container>
            <Grid xs={12} md={4} item>
              <Stack direction="column">
                <IconTarget width={56}/>
                <Typography variant="h4">
                  Misión
                </Typography>
                <Typography variant="body2">
                  Seguir ofreciendo asesoría inmobiliaria personalizada a nuestros clientes, contar con los inmuebles que tengan la certeza legal para maximizar el valor de sus inversiones y protección de su patrimonio, logrando una relación de mutuo beneficio.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4} item>
              <Stack direction="column">
                <IconVision width={56}/>
                <Typography variant="h4">
                  Visión
                </Typography>
                <Typography variant="body2">
                  Expandir nuestra participación a nivel regional y nacional. Ser líder regional en el desarrollo y comercialización de bienes inmuebles comerciales y habitaciones. Ser una empresa reconocida con un alto valor percibido en sus productos y servicios,  logrando así la asociación con estándares de excelencia.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4} item>
              <Stack direction="column">
                <IconValues width={56}/>
                <Typography variant="h4">
                  Valores
                </Typography>
                <Typography variant="body2">
                  Expandir nuestra participación a nivel regional y nacional. Ser líder regional en el desarrollo y comercialización de bienes inmuebles comerciales y habitaciones. Ser una empresa reconocida con un alto valor percibido en sus productos y servicios,  logrando así la asociación con estándares de excelencia.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            sx={{
              mt: 9,
              mb: 2
            }}
            spacing={2}
            justifyContent="center"
            container
          >
            <Grid item>
              <Button
                startIcon={<ChevronLeft/>}
              >
                Volver al inicio
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                endIcon={<ChevronRight/>}
              >
                Ir al catálogo de propiedades
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default ConocenosPage;