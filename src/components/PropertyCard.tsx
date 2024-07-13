import * as React from "react"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledCard } from "../styled/"
import {
  ArrowCircleRightOutlined,
  ArrowForwardOutlined,
  StarRounded,
} from "@mui/icons-material"
import CardActionArea from "@mui/material/CardActionArea"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { navigate } from "gatsby"
import { BgImage } from "gbimage-bridge"
import useTheme from "@mui/material/styles/useTheme"
import Box from "@mui/material/Box"
import useWindowDimensions from "../hooks/useWindowDimensions"
import Container from "@mui/material/Container"

type PropertyCardType = {
  data?: any
  key: number | string
  showAsList?: boolean
  attached?: boolean
  fullScreen?: boolean
  showEstimate?: boolean
  customOnClick?: () => void
  autoHeight?: boolean
}
const PropertyCard = ({
  data,
  key,
  showAsList,
  attached,
  fullScreen,
  showEstimate = false,
  customOnClick,
  autoHeight,
}: PropertyCardType) => {
  const theme = useTheme()
  const image = getImage(data?.coverImage)
  const { width } = useWindowDimensions()

  console.log("data-property-card ", data)
  const CardInnerContent = (data: any) => (
    <CardActionArea
      onClick={
        customOnClick
          ? customOnClick
          : () => navigate(`/propiedad/${data.slug}`)
      }
    >
      {!data?.isProject && image && (
        <GatsbyImage
          image={image}
          style={{
            width: "100%",
            zIndex: 0,
            //position: data.isProject ? 'absolute' : 'relative',
            height: data?.isProject ? "100%" : "auto",
          }}
          alt={data.name}
        />
      )}
      <CardContent>
        <Typography
          /* @ts-ignore */
          variant={data?.isProject ? "h5" : "cardTitle"}
          color={data?.isProject && theme.palette.primary.light}
        >
          {data?.name}
        </Typography>
        {!data?.isProject && (
          <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
            {data?.price &&
              `$ ${
                data?.price && new Intl.NumberFormat().format(data?.price)
              } mxn` + " "}
            {data?.area && `${data.area} m²`}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {data?.location && data.location.name}
        </Typography>
        <Stack sx={{ mt: 2 }} spacing={1} direction="row">
          {data?.features &&
            !data?.isProject &&
            data.features.map((feature, index) => (
              <Chip size="small" key={index} label={feature.name} />
            ))}
        </Stack>
      </CardContent>
      {!attached && (
        <CardActions>
          <Button
            onClick={() => navigate(`/propiedad/${data.slug}`)}
            variant="text"
            sx={{ textTransform: "none" }}
            size="small"
            startIcon={<ArrowForwardOutlined />}
          >
            {showEstimate ? "Ver mensualidades" : "Ver detalles"}
          </Button>
        </CardActions>
      )}
    </CardActionArea>
  )

  const ProjectCard = data => (
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
        <Typography
          variant="body2"
          sx={{
            fontWeight: 300,
          }}
          color="white"
        >
          A {data?.timeFromDowntown} de puerto escondido
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 300,
          }}
          color="white"
        >
          Playas cercanas: {data?.nearToBeaches}
        </Typography>
        <Stack sx={{ mt: 2 }} spacing={1} direction="row">
          {data?.features &&
            data.features.map((feature, index) => (
              <Chip size="small" key={index} label={feature.name} />
            ))}
        </Stack>
      </CardContent>
      {!attached && (
        <CardActions
          sx={{
            position: "absolute",
            bottom: 8,
          }}
        >
          <Button
            onClick={() => navigate(`/propiedad/${data.slug}`)}
            variant="text"
            sx={{
              textTransform: "none",
              color: theme.palette.primary.light,
            }}
            size="small"
            startIcon={<ArrowCircleRightOutlined />}
          >
            {showEstimate ? "Ver mensualidades" : "Ver detalles"}
          </Button>
        </CardActions>
      )}
    </CardActionArea>
  )

  return (
    <StyledCard
      sx={{
        maxWidth: {
          xs: "100%",
          md: fullScreen ? "100%" : 414,
        },
        borderRadius: fullScreen ? 0 : showAsList ? 3 : 4,
        borderBottom: {
          xs: showAsList && `1px solid ${theme.palette.primary.main}`,
          md: "none",
        },
        height: autoHeight
          ? "auto"
          : showAsList
          ? "auto"
          : attached
          ? 100
          : 400,
      }}
      elevation={width < 400 ? 0 : 1}
      key={key}
    >
      {data?.isFeatured ? (
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
          {fullScreen ? (
            <Container sx={{ height: "100%" }} maxWidth="xl">
              {ProjectCard(data)}
            </Container>
          ) : (
            ProjectCard(data)
          )}
        </BgImage>
      ) : (
        CardInnerContent(data)
      )}
    </StyledCard>
  )
}

export default PropertyCard
