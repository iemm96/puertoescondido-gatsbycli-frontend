import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledCard } from "../styled/";
import {ArrowCircleRightOutlined, ArrowForwardOutlined, StarRounded} from '@mui/icons-material';
import { CardActionArea, Chip, Stack } from "@mui/material"
import { calculateArea } from "../helpers/calculateArea"
import { navigate } from "gatsby"
import { BgImage } from "gbimage-bridge";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import useWindowDimensions from "../hooks/useWindowDimensions";
const PropertyCard = ({ data, key, showAsList }:{ data:any, key: number, showAsList?:boolean }) => {
    const theme = useTheme();
    const image = getImage(data?.coverImage);
    const { width }  = useWindowDimensions();

    const CardInnerContent = (( data:any ) => (
        <CardActionArea
            onClick={ () => navigate(`/propiedades/${ data.slug }`) }
        >
            {
                ( !data?.isProject && image ) && (
                    <GatsbyImage
                        image={ image }
                        style={{
                            width: '100%',
                            zIndex: 0,
                            //position: data.isProject ? 'absolute' : 'relative',
                            height: data?.isProject ? '100%' : 'auto'
                        }}
                        alt={ data.name }
                    />
                )
            }
            <CardContent>
                {
                    !data?.isProject && (
                        <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
                            $ { data?.price &&
                            new Intl.NumberFormat().format(data?.price)
                        } mxn { ( data?.width && data?.length ) &&
                            `· ${calculateArea( parseInt(data.width), parseInt(data.length), data?.measures_unit )}`
                        }
                        </Typography>
                    )
                }

                <Typography
                    /* @ts-ignore */
                    variant={ data?.isProject ? 'h5' : 'cardTitle' }
                    color={ data?.isProject && theme.palette.primary.light }
                >
                    { data?.name }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { data?.location && data.location.name }
                </Typography>
                <Stack sx={{ mt: 2 }} spacing={ 1 } direction="row">
                    {
                        (data?.features &&
                            !data?.isProject ) &&
                        data.features.map( (feature, index) => (
                            <Chip size="small" key={index} label={ feature.name }/>
                        ) )
                    }
                </Stack>
            </CardContent>
            <CardActions>
                <Button
                    onClick={  () => navigate(`/${ data.uid }`) }
                    variant="text"
                    sx={{textTransform:'none'}}
                    size="small"
                    startIcon={<ArrowForwardOutlined/>}
                >
                    Ver detalles
                </Button>
            </CardActions>
        </CardActionArea>
    ));

    const ProjectCard = (data) => (
        <CardActionArea
            sx={{ height: '100%' }}
            onClick={ () => navigate(`/proyecto/${ data.slug }`) }
        >
            {
                ( !data?.isProject && image ) && (
                    <GatsbyImage
                        image={ image }
                        style={{
                            width: '100%',
                            zIndex: 0,
                            //position: data.isProject ? 'absolute' : 'relative',
                            height: data?.isProject ? '100%' : 'auto'
                        }}
                        alt={ data.name }
                    />
                )
            }
            <CardContent>
                {/* @ts-ignore */}
                <Typography
                    variant="h5"
                    color={ theme.palette.primary.light }
                    sx={{
                        fontWeight: 900
                    }}
                >
                    { data?.name }
                </Typography>
                {
                    data?.isFeatured && (
                        <>
                            <Typography variant="body2" color="white">
                                Proyecto estrella
                            </Typography>
                            <Stack direction="row" spacing={ 0 }>
                                <StarRounded
                                    sx={{
                                        color: '#FFE70E'
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: '#FFE70E'
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: '#FFE70E'
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: '#FFE70E'
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: '#FFE70E'
                                    }}
                                />
                            </Stack>
                        </>

                    )
                }
                <Typography variant="body2" sx={{
                    fontWeight: 300
                }} color="white">
                    { data?.description }
                </Typography>
                <Stack sx={{ mt: 2 }} spacing={ 1 } direction="row">
                    {
                        data?.features &&
                        data.features.map( (feature, index) => (
                            <Chip size="small" key={index} label={ feature.name }/>
                        ) )
                    }
                </Stack>
            </CardContent>
            <CardActions
                sx={{
                    position: 'absolute',
                    bottom: 8
                }}
            >
                <Button
                    onClick={  () => navigate(`/${ data.uid }`) }
                    variant="text"
                    sx={{
                        textTransform:'none',
                        color: theme.palette.primary.light
                    }}
                    size="small"

                    startIcon={<ArrowCircleRightOutlined/>}
                >
                    Ver detalles
                </Button>
            </CardActions>

        </CardActionArea>
    )

    return(
        <StyledCard
            sx={{
                maxWidth: {
                    xs: '100%',
                    md: 414
                },
                borderRadius: showAsList ? 0 : 4,
                borderBottom: {
                    xs: showAsList && `1px solid ${ theme.palette.primary.main }`,
                    md: 'none'
                },
                height: showAsList ? 'auto' : 400
            }}
            elevation={ width < 400 ? 0 : 1 }
            key={ key }>
            {
                data?.isProject ? (

                    <BgImage
                        // @ts-ignore
                        style={{ height: '100%' }}
                        image={ image }
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%)',
                                position: 'absolute',
                                zIndex: 0,
                            }}
                        />
                        { ProjectCard( data ) }
                    </BgImage>

                ) : (
                    CardInnerContent( data )
                )
            }
        </StyledCard>
    )
}

export default PropertyCard;