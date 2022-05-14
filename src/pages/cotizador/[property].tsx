import * as React from "react";
import Seo from "../../components/seo";
import Container from "@mui/material/Container"
import { Box, Chip, Stack, Typography, Slider, useTheme } from "@mui/material"
import Layout from "../../components/layout"
import Grid from "@mui/material/Grid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { useEffect, useState } from "react"
import { fetchRecord } from "../../actions/fetchRecord"
import CoverImage from "../../components/common/CoverImage"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import withTheme from "../../components/theme";
import StyledGradientSection from "../../styled/StyledGradientSection";
import {Gallery} from "../../components/common/Gallery";
import Header from "../../components/Header";
import SplashScreen from "../../components/common/SplashScreen";

type marksType = {
    value: number;
    label: string;
}
const EstimateDetails = ({ property }) => {
    const theme = useTheme();
    const [ propertyData, setPropertyData ] = useState( null );
    const [ monthlyPay, setMonthlyPay ] = useState<any | number>( null );
    const [ currentValueSlider, setCurrentValueSlider ] = useState<number>( 12 );
    const [ months, setMonths ] = useState<marksType[] | null>( null );
    const [ galleryImages, setGalleryImages ] = useState<any[]>( [] );

    useEffect(() => {
        getProperty().then();
    },[  ]);

    useEffect(() => {

        const totalPrice = propertyData?.zone?.price_per_square_meter * propertyData?.area;
        const annualInterestTotal = propertyData?.zone?.price_annual_interest * ( currentValueSlider/12 );


        if( propertyData?.zone?.price_per_square_meter  ) {

            if( currentValueSlider === 0 ) {
                setMonthlyPay( totalPrice )
            }else {
                setMonthlyPay( ( totalPrice + annualInterestTotal ) / currentValueSlider );

            }
        }
        //setMonthlyPay(  currentValueSlider ? propertyData.price/currentValueSlider : propertyData?.price );
    }, [ propertyData, currentValueSlider ]);

    const getProperty = async () => {
        const propertyResult = await fetchRecord( 'properties', property );

        if( propertyResult?.property?.project?.selectable_financing_months ) {
            const arrMonths:marksType[] = [{
                value: 0,
                label: 'De contado'
            }];

            propertyResult?.property?.project?.selectable_financing_months.map(( month:number ) => (
                arrMonths.push({
                    value: month,
                    label: `${ month } meses`,
                })
            ));

            setMonths( arrMonths );
        }

        //If contains bluePrint Image
        if( propertyResult.property?.aerialImage?.url ) {
            setGalleryImages( prevState => [ ...prevState, propertyResult.property?.aerialImage ] )
        }

        //If contains aerial Image
        if( propertyResult.property?.bluePrintImage?.url ) {
            setGalleryImages( prevState => [ ...prevState, propertyResult.property?.bluePrintImage ] )
        }

        if( propertyResult.property?.images && propertyResult.property?.images.length > 0 ) {
            setGalleryImages( prevState => [ ...prevState, ...propertyResult.property?.images ] )
        }

        setPropertyData( propertyResult.property );
    }

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
    `);



    function valuetext(value: number) {
        return `${value}`;
    }

    const handleMonthsChange = (e: Event, newValue:number | number[]) => {
        setCurrentValueSlider( newValue );
    }

    return(
        <>
            <SplashScreen duration={4}/>
            <Seo title="Cotizador de propiedad"/>
            <Layout>
                <Header/>
                {
                    propertyData && (
                        <>
                            <CoverImage data={{
                                image: propertyData?.coverImage?.url,
                                price: propertyData?.price,
                                name: propertyData?.name,
                                currency: propertyData?.currency,
                                location: propertyData?.location?.name,
                                features: propertyData?.features
                            }}/>
                            <Container sx={{ mt: 2 }} maxWidth="xl">
                                <Typography variant="subtitle1">Paso 2 de 2</Typography>
                                <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">Elige las mensualidades...</Typography>
                                <Grid justifyContent="center" container>
                                    <Grid item xs={ 12 } md={ 10 }>
                                        {
                                            months && (
                                                <Box>
                                                    <Slider
                                                        onChange={ handleMonthsChange }
                                                        aria-label="Mensualidades"
                                                        defaultValue={ currentValueSlider }
                                                        max={ propertyData?.project?.total_financing_months }
                                                        getAriaValueText={valuetext}
                                                        step={ null }
                                                        valueLabelDisplay="auto"
                                                        marks={ months }
                                                    />
                                                </Box>
                                            )
                                        }
                                    </Grid>
                                </Grid>

                                <Container maxWidth="md">
                                    <Card sx={{ mt: 2 }}>
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.primary.main
                                                }}
                                                align="center"
                                            >
                                                { currentValueSlider === 0 ? `Precio de contado:` : `${currentValueSlider} mensualidades de:` }
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                align="center"
                                                sx={{
                                                    mt: 2,
                                                    color: theme.palette.primary.main,
                                                    fontWeight: 700
                                                }}
                                            >
                                                ${ new Intl.NumberFormat().format( monthlyPay ) }
                                            </Typography>
                                            <Stack sx={{ mt: 2 }} direction="row" justifyContent="space-between">
                                                <Typography color="text.secondary">
                                                    Precio por metro cuadrado:
                                                </Typography>
                                                <Typography>
                                                    { `$ ${propertyData?.zone?.price_per_square_meter } ${ propertyData?.currency }` }
                                                </Typography>
                                            </Stack>
                                            <Button
                                                sx={{
                                                    mt: 2,
                                                    textTransform: 'none'
                                                }}
                                                variant="contained"
                                                fullWidth
                                            >
                                                Solicitar Crédito
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Container>
                            </Container>
                            <StyledGradientSection sx={{
                                mt: 4
                            }}>
                                <Container maxWidth="xl">
                                    <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">Galería</Typography>
                                    {
                                        galleryImages &&
                                        <Gallery data={ galleryImages }/>
                                    }
                                </Container>

                            </StyledGradientSection>
                            <Box
                                sx={{
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}
                            >
                                <Button
                                    sx={{
                                        mt: 4,
                                        mb: 8,
                                        transformText: 'none'
                                    }}
                                    onClick={ () => navigate('/') }
                                    startIcon={ <ChevronLeft/> }
                                    variant="outlined"
                                >
                                    Volver al catálogo
                                </Button>
                            </Box>
                        </>
                    )
                }

            </Layout>
        </>
    )
}

export default withTheme( EstimateDetails );