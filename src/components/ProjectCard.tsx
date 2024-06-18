import * as React from "react"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { getImage } from "gatsby-plugin-image"
import { ArrowCircleRightOutlined, StarRounded } from "@mui/icons-material"
import CardActionArea from "@mui/material/CardActionArea"
import Stack from "@mui/material/Stack"
import { navigate } from "gatsby"
import { BgImage } from "gbimage-bridge"
import useTheme from "@mui/material/styles/useTheme"
import Box from "@mui/material/Box"
import { styled } from "@mui/material"
import Card from "@mui/material/Card"

export const StyledCard = styled(Card)(() => ({
  position: "relative",
  width: "auto",
  maxWidth: 414,
  minWidth: 280,
  borderRadius: 10,
  boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
}))

type ProjectCardType = {
  data?: any
  key: number | string
  showAsList?: boolean
  attached?: boolean
  fullScreen?: boolean
  showEstimate?: boolean
  customOnClick?: () => void
  autoHeight?: boolean
}
const ProjectCard = ({ data, key }: ProjectCardType) => {
  const theme = useTheme()
  const image = getImage(data?.coverImage)

  return (
    <StyledCard
      sx={{
        maxWidth: {
          xs: "100%",
          md: 414,
        },
        borderRadius: 4,
        borderBottom: {
          md: "none",
        },
        height: 400,
      }}
      elevation={0}
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
                fontSize: "inherit",
                fontWeight: 900,
              }}
            >
              {data?.name}
            </Typography>
            <>
              <Typography variant="body2" color="white">
                Proyecto estrella
              </Typography>
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
            {data?.timeFromDowntown && (
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 300,
                }}
                color="white"
              >
                A {data?.timeFromDowntown} de puerto escondido
              </Typography>
            )}
            {data?.nearToBeaches && (
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 300,
                }}
                color="white"
              >
                Playas cercanas: {data?.nearToBeaches}
              </Typography>
            )}
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
              Ver detalles
            </Button>
          </CardActions>
        </CardActionArea>
      </BgImage>
    </StyledCard>
  )
}

export default ProjectCard