import * as React from "react";
import Seo from "../../components/seo";
import Container from "@mui/material/Container"
import { Box, Chip, Stack, Typography, Slider, useTheme } from "@mui/material"
import Layout from "../../components/layout"
import Grid from "@mui/material/Grid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { fetchRecord } from "../../actions/fetchRecord"
import CoverImage from "../../components/common/CoverImage"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import withTheme from "../../components/theme";
import StyledGradientSection from "../../styled/StyledGradientSection";
import {Gallery} from "../../components/common/Gallery";
import Header from "../../components/Header";
import SplashScreen from "../../components/common/SplashScreen";
import StyledButton from "../../styled/StyledButton";
import {formatCurrency} from "../../helpers/formatCurrency";

type marksType = {
    value: number;
    label: string;
}
const EstimateDetails = ({  property, data }) => {
    const theme = useTheme();
    const [ propertyData, setPropertyData ] = React.useState( null );
    const [ monthlyPay, setMonthlyPay ] = React.useState<any | number>( null );
    const [ currentValueSlider, setCurrentValueSlider ] = React.useState<number>( 12 );
    const [ months, setMonths ] = React.useState<marksType[] | null>( null );
    const [ galleryImages, setGalleryImages ] = React.useState<any[]>( [] );
    const [ priceInterestAnnual, setPriceInterestAnual ] = React.useState<any>( null );
    const [ firstPayment, setFirstPayment ] = React.useState<any>( null );

    React.useEffect(() => {
        getProperty().then();
    },[  ]);

    React.useEffect(() => {

        const propertyTotalPrice = propertyData?.price * propertyData?.area;

        let annualInterestTotal = null;
        if( priceInterestAnnual ) {
            annualInterestTotal = priceInterestAnnual * ( currentValueSlider/12 );
        } else {
            annualInterestTotal = ( currentValueSlider/12 );
        }

        if( propertyData?.price  ) {

            if( currentValueSlider === 0 ) {
                setMonthlyPay( propertyTotalPrice )
            }else {
                setMonthlyPay( ( propertyTotalPrice + annualInterestTotal ) / currentValueSlider );
            }
        }

        let firstPaymentPercentage = 10;
        let a = (((propertyTotalPrice + annualInterestTotal ) * firstPaymentPercentage ) / 100)

        if( annualInterestTotal ) {
            setFirstPayment(
                ((propertyTotalPrice + annualInterestTotal) - a) / currentValueSlider
            )
        }else {
            setFirstPayment( null )
        }

    }, [ propertyData, currentValueSlider ]);

    const getProperty = async () => {
        const propertyResult = await fetchRecord( 'properties/bySlug', property );

        if( propertyResult?.property?.selectable_financing_months ) {
            const arrMonths:marksType[] = [{
                value: 0,
                label: 'De contado'
            }];

            if( propertyResult?.property?.price_annual_interest ) {
                setPriceInterestAnual( propertyResult?.property?.price_annual_interest );
            }

            propertyResult?.property?.selectable_financing_months.map(( item:any ) => (
                arrMonths.push({
                    value: item?.elegibleMonths,
                    label: `${ item?.elegibleMonths } meses`,
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
                                <Typography variant="subtitle1">Simulador</Typography>
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
                                                        max={ propertyData?.total_financing_months }
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
                                                ${ formatCurrency( monthlyPay ) }
                                            </Typography>
                                            <Stack sx={{ mt: 2 }} direction="row" justifyContent="space-between">
                                                <Typography color="text.secondary">
                                                    Precio por metro cuadrado:
                                                </Typography>
                                                <Typography>
                                                    { `$ ${ formatCurrency( propertyData?.price ) } ${ propertyData?.currency }` }
                                                </Typography>
                                            </Stack>
                                            {
                                                firstPayment && (
                                                    <Stack sx={{ mt: 2 }} direction="row" justifyContent="space-between">
                                                        <Typography color="text.secondary">
                                                            Enganche:
                                                        </Typography>
                                                        <Typography>
                                                            { `$ ${ formatCurrency( firstPayment ) } ${ propertyData?.currency }` }
                                                        </Typography>
                                                    </Stack>
                                                )
                                            }
                                            <StyledButton
                                                sx={{
                                                    mt: 2,
                                                    textTransform: 'none'
                                                }}
                                                variant="contained"
                                                color="secondary"
                                                fullWidth
                                            >
                                                Solicitar Crédito
                                            </StyledButton>
                                        </CardContent>
                                    </Card>
                                </Container>
                            </Container>
                            <StyledGradientSection sx={{
                                mt: 4,
                                pb: 4
                            }}>
                                <Container maxWidth="xl">
                                    <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">Galería</Typography>
                                    <Grid item justifyContent="center" display="flex">
                                        {
                                            data?.property?.images &&
                                            <Gallery data={ data.property.images } preview={ true }/>
                                        }
                                    </Grid>

                                </Container>
                            </StyledGradientSection>
                            <Box
                                sx={{
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}
                            >
                                <StyledButton
                                    sx={{
                                        mt: 4,
                                        mb: 8,
                                    }}
                                    onClick={ () => navigate('/') }
                                    startIcon={ <ChevronLeft/> }
                                    variant="outlined"
                                >
                                    Volver al catálogo
                                </StyledButton>
                            </Box>
                        </>
                    )
                }
            </Layout>
        </>
    )
}

export default withTheme( EstimateDetails );

export const query = graphql`
    query ProjectsDetailsPage2($slug: String) {
        property(slug: {eq: $slug}) {
            name
            uid
            description
            images {
                childImageSharp {
                    gatsbyImageData( placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED )
                }
            }

        }
    }
`