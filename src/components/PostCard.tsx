import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, Chip, Stack} from "@mui/material"
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import { StyledCard } from "../styled/";
import { ArrowForwardOutlined } from '@mui/icons-material';
import { navigate } from "gatsby"

const PostCard = ({ data }:{ data?:any }) => {
    const image = getImage( data?.mainImage?.asset )
    console.log(  'data ', data)
    return(
        <StyledCard>
            <CardActionArea
                onClick={ () => navigate( `post/${ data?.slug.current}` ) }
            >
                {
                    image && (
                        <GatsbyImage
                            image={ image }
                            style={{
                                width: '100%',
                                zIndex: 0,
                                height: 200
                            }}
                            alt={ data.title }
                        />
                    )
                }
                <CardContent>
                    {/* @ts-ignore */}
                    <Typography variant="cardTitle">
                        { data.title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        { data?.author?.name }
                    </Typography>
                    <Stack sx={{ mt: 2 }} spacing={ 2 } direction="row" flexWrap="wrap">
                        {
                            data?.categories &&
                            data.categories.map( (category, index) => (
                                <Chip size="small" key={index} label={ category.title }/>
                            ) )
                        }
                    </Stack>
                    <Button
                        variant="text"
                        sx={{textTransform:'none'}}
                        size="small"
                        startIcon={<ArrowForwardOutlined/>}
                    >
                        Leer
                    </Button>
                </CardContent>
            </CardActionArea>

        </StyledCard>

    )
}

export default PostCard;