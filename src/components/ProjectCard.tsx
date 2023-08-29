import * as React from "react"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { getImage } from "gatsby-plugin-image"
import { StyledCard } from "../styled/"
import {
  ArrowCircleRightOutlined,
  StarRounded,
} from "@mui/icons-material"
import CardActionArea from "@mui/material/CardActionArea"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { navigate } from "gatsby"
import { BgImage } from "gbimage-bridge"
import useTheme from "@mui/material/styles/useTheme"
import Box from "@mui/material/Box"

type ProjectCardType = {
    data?: any,
    key: number | string,
    showAsList?: boolean,
    attached?: boolean,
    fullScreen?: boolean,
    showEstimate?: boolean,
    customOnClick?: () => void;
    autoHeight?: boolean;
}
const ProjectCard = ({
    data,
    key,
    showAsList,
    attached,
    fullScreen,
    showEstimate = false,
    autoHeight
}:ProjectCardType ) => {
  const theme = useTheme()
  const image = getImage(data?.coverImage)

  return (
    <StyledCard
      sx={{
        maxWidth: {
          xs: "100%",
          md: fullScreen ? '100%' : 414,
        },
        borderRadius: fullScreen ? 0 : showAsList ? 3 : 4,
        borderBottom: {
          xs: showAsList && `1px solid ${theme.palette.primary.main}`,
          md: "none",
        },
        height: autoHeight ?  'auto' : (showAsList ? "auto" : attached ? 100 : 400),
      }}
      elevation={ 0 }
      key={key}
    >
        <BgImage
            // @ts-ignore
            style={{ height: "100%" }}
            image={image}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%)",
                    position: "absolute",
                    zIndex: 0,
                }}
            />
            <CardActionArea
                sx={{ height: "100%" }}
                onClick={() => navigate(`/propiedad/${data.slug}`)}
            >
                <CardContent>
                    {/* @ts-ignore */}
                    <Typography
                        variant="h5"
                        color={theme.palette.primary.light}
                        sx={{
                            fontSize: attached ? "16px !important" : "inherit",
                            fontWeight: attached ? 500 : 900,
                        }}
                    >
                        {data?.name}
                    </Typography>
                    <>
                        <Typography variant="body2" color="white">
                            Proyecto estrella
                        </Typography>
                        {!attached && (
                            <Stack direction="row" spacing={0}>
                                <StarRounded
                                    sx={{
                                        color: "#FFE70E",
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: "#FFE70E",
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: "#FFE70E",
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: "#FFE70E",
                                    }}
                                />
                                <StarRounded
                                    sx={{
                                        color: "#FFE70E",
                                    }}
                                />
                            </Stack>
                        )}
                    </>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 300,
                        }}
                        color="white"
                    >
                        {data?.description}
                    </Typography>
                    <Stack sx={{ mt: 2 }} spacing={1} direction="row">
                        {data?.features &&
                            data.features.map((feature, index) => (
                                <Chip size="small" key={index} label={feature.name} />
                            ))}
                    </Stack>
                </CardContent>
                <CardActions
                    sx={{
                        position: "absolute",
                        bottom: 8,
                    }}
                >
                    <Button
                        onClick={() => navigate(`/${data.slug}`)}
                        variant="text"
                        sx={{
                            textTransform: "none",
                            color: theme.palette.primary.light,
                        }}
                        size="small"
                        startIcon={<ArrowCircleRightOutlined />}
                    >
                        {
                            showEstimate ? 'Ver mensualidades' : 'Ver detalles'
                        }
                    </Button>
                </CardActions>
            </CardActionArea>
        </BgImage>
    </StyledCard>
  )
}

export default ProjectCard