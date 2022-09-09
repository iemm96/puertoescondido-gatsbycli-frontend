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
import {graphql, navigate, useStaticQuery} from "gatsby";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import IconTarget from './../images/icons/target.svg';
import IconVision from './../images/icons/vision.svg';
import IconValues from './../images/icons/values.svg';
import { StaticImage } from "gatsby-plugin-image";
import {Home} from "@mui/icons-material";
import StyledButton from "../styled/StyledButton";

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
      <Layout persistentHeader={true}>
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
                    Contamos con un equipo de colaboradores con 30 años de experiencia en el ramo inmobiliario, que le darán esa seguridad y garantía que necesita a la hora de invertir en un inmueble con nosotros que será su patrimonio.
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
                <IconTarget width={48}/>
                <Typography variant="h6" color="primary">
                  Misión
                </Typography>
                <Typography align="justify" variant="body2">
                  Somos una empresa dedicada a la compra, venta y promoción de propiedades en la costa oaxaqueña. Estamos comprometidos en poder proporcionar asesoramiento integral para poder entender y solucionar las necesidades de nuestros clientes. Buscamos ser la opción más confiable para la adquisición de una propiedad, basándonos en nuestra experiencia, transparencia y profesionalismo.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4} item>
              <Stack direction="column">
                <IconVision width={48}/>
                <Typography variant="h6"  color="primary">
                  Visión
                </Typography>
                <Typography variant="body2">
                  Posicionarnos como la empresa costeña más confiable y con mayor experiencia en el mercado inmobiliario de Puerto Escondido, Oaxaca para que las personas acudan como primera opción hacia nosotros y así poder trabajar con orgullo y seguir creciendo con éxito junto a nuestros clientes en la búsqueda de maximizar el valor de sus inversiones, satisfacer sus necesidades y otorgarles la posibilidad de encontrar su nuevo hogar.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4} item>
              <Stack direction="column">
                <IconValues width={48}/>
                <Typography variant="h6" color="primary">
                  Valores
                </Typography>
                <Typography variant="body2">
                  <b>Calidad</b>{ <br/> }
                  Nos distinguimos por el trato y apoyo que le brindamos a nuestros clientes para ayudarlos a buscar la mejor opción, adecuada a sus necesidades y gustos.{ <br/> }
                  <b>Compromiso</b>{ <br/> }
                  Nos comprometemos como empresa en asesorar y acompañar al comprador en todo el proceso de la adquisición de su propiedad.{ <br/> }
                  <b>Responsabilidad</b>{ <br/> }
                  Nos encargamos en entregar bienes y servicios de calidad.{ <br/> }
                  <b>Seguridad</b>{ <br/> }
                  Resaltar un vínculo de confianza en los que los clientes se sientan satisfechos en sus necesidades, deseos y proyectos.{ <br/> }
                  <b>Honestidad</b>{ <br/> }
                  Nos enfocamos en darle transparencia y credibilidad a nuestra empresa, dando el mejor servicio y generando confianza a través de la verdad.{ <br/> }
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
              <StyledButton
                  onClick={ () => navigate( '/' ) }
                  startIcon={<Home/>}
              >
                Volver al inicio
              </StyledButton>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default ConocenosPage;