import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import PropertiesList from "../../components/common/PropertiesList"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

const Cotizador = () => {
  return (
    <>
      <Seo title="Cotizador" />
      <Layout>
        <Paper elevation={0}>
          <Container>
            <Typography variant="subtitle1">Paso 1 de 2</Typography>
            <Typography sx={{ fontWeight: 600, mb: 1 }} variant="h5">
              Selecciona una propiedad...
            </Typography>
            <PropertiesList />
          </Container>
        </Paper>
      </Layout>
    </>
  )
}

export default Cotizador
