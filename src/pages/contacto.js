import * as React from 'react';
import Seo from "../components/seo"
import Layout from "../components/layout"
import GradientBox from "../components/GradientBox"
import { Paper, Typography, Box, Container, Grid, Stack, TextField, Button } from "@mui/material"
import { Controller, useForm } from 'react-hook-form';
import { ChevronLeft, Phone, PinDrop } from "@mui/icons-material"
import SocialNetworksIcons from "../components/common/SocialNetworksIcons";

const inputStyles = {
  '& .MuiFilledInput-input': {
    color: '#4664F6',
  },
  '& .MuiFilledInput-root': {
    backgroundColor: '#EBF2FF',
    borderRadius: 3.5,
  }
}

const Contacto = () => {
  const { handleSubmit, control, formState: {errors}, } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return(
    <>
      <Seo title="Contacto"/>
      <Layout persistentHeader={ true }>
        <GradientBox height={400} position="absolute"/>
        <Box sx={{
          justifyContent: 'center',
          display: 'flex'
        }}>
          <Typography
            sx={{
              mt: 16,
              mb: 3
            }}
            variant="h4"
          >
            Contáctanos
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Paper
            sx={{ p: 4 }}
            elevation={ 2 }
          >
            <Grid container spacing={ 2 }>
              <Grid sx={{ borderRight: '1px solid #C4C4C4', pr: 2 }} xs={ 12 } md={ 7 } item>
                <Stack direction="column">
                  <Typography variant="subtitle1">
                    Escríbenos
                  </Typography>
                  <Typography sx={{ mb: 2 }} variant="body2">
                    ¡Estamos para resolver tus dudas!
                  </Typography>
                  <form>
                    <Grid container spacing={ 2 }>
                      <Grid xs={ 12 } item>
                        <Controller
                          render={({ field: { onChange, value } }) => (
                            <TextField
                              InputProps={{
                                disableUnderline: true
                              }}
                              sx={inputStyles}
                              fullWidth
                              variant="filled"
                              onChange={onChange}
                              value={value}
                              label="Nombre"
                            />
                          )}
                          name="name"
                          control={control}
                        />
                      </Grid>
                      <Grid xs={ 12 } md={ 6 } item>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    InputProps={{
                                      disableUnderline: true
                                    }}
                                    sx={inputStyles}
                                    fullWidth
                                    variant="filled"
                                    onChange={onChange}
                                    value={value}
                                    label="Teléfono"
                                />
                            )}
                            name="phone"
                            control={control}
                        />
                      </Grid>
                      <Grid xs={ 12 } md={ 6 } item>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    InputProps={{
                                      disableUnderline: true
                                    }}
                                    sx={inputStyles}
                                    fullWidth
                                    variant="filled"
                                    onChange={onChange}
                                    value={value}
                                    label="Correo"
                                />
                            )}
                            name="email"
                            control={control}
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    InputProps={{
                                      disableUnderline: true
                                    }}
                                    sx={inputStyles}
                                    fullWidth
                                    variant="filled"
                                    onChange={onChange}
                                    value={value}
                                    multiline
                                    label="Mensaje"
                                />
                            )}
                            name="message"
                            control={control}
                        />
                      </Grid>
                    </Grid>
                  </form>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Enviar mensaje
                  </Button>
                  <Grid container mt={ 5 }>
                    <Grid xs={ 12 } md={ 6 } item>
                      <Typography>
                        Nuestras Redes Sociales:
                      </Typography>
                    </Grid>
                    <Grid xs={ 12 } md={ 6 } item>
                      <SocialNetworksIcons/>
                    </Grid>
                  </Grid>

                </Stack>
              </Grid>
              <Grid xs={ 12 } md={ 5 } item>
                <Stack direction="column">
                  <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1}>
                    <Phone />
                    <Typography variant="h6">
                      Teléfonos
                    </Typography>
                  </Stack>
                  <Typography>
                    +52 (954) 108 49 25<br/>
                    +52 (951) 171 48 29
                  </Typography>
                  <Stack mt={ 2 } direction="row" sx={{ alignItems: 'center' }} spacing={1}>
                    <PinDrop />
                    <Typography variant="h6">
                      Domicilio
                    </Typography>
                  </Stack>
                  <Typography>
                    Calle 2a Norte, #306, Sector Reforma B, Centro, Puerto Escondido, Oax, México.
                  </Typography>
                  <Box sx={{
                    borderRadius: 4,
                    border: '1px solid #00A2A6',
                    width: 300,
                    height: 300
                  }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Paper>
          <Grid
            sx={{
              mt: 12,
              mb: 2
            }}
            container
            justifyContent="center"
          >
            <Grid item>
              <Button
                startIcon={<ChevronLeft/>}
              >
                Volver al inicio
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default Contacto;