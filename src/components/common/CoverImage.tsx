import * as React from "react"
import { Chip, Stack, styled } from "@mui/material"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import useTheme from "@mui/material/styles/useTheme"
import { BgImage } from "gbimage-bridge"
import { FmdGood } from "@mui/icons-material"

interface MyThemeComponentProps {
  image: string
}

const StyledLinearBackgroundDiv = styled("div")(() => ({
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)",
  width: "100%",
  height: "100%",
  zIndex: 1,
  position: "absolute",
}))

const CoverImage = ({
  data,
  gatsbyImage,
  maxWidth,
  component,
}: {
  data?: any
  gatsbyImage: any
  maxWidth?: "xs" | "xl" | "sm" | "md" | "lg"
  component?: any
}) => {
  const theme = useTheme()

  const StyledRelativeDiv = styled("div")(() => ({
    position: "relative",
  }))

  const StyledAbsoluteDiv = styled("div")(() => ({
    position: "absolute",
    bottom: theme.spacing(3),
    zIndex: 2,
  }))

  const MyThemeComponent = styled("div", {
    // Configure which props should be forwarded on DOM
    shouldForwardProp: prop => prop !== "image",
    name: "MyThemeComponent",
    slot: "Root",
    // We are specifying here how the styleOverrides are being applied based on props
    overridesResolver: (props, styles) => [
      styles.root,
      props.color === "primary" && styles.primary,
      props.color === "secondary" && styles.secondary,
    ],
  })<MyThemeComponentProps>(({ image }) => ({
    backgroundImage: `url( ${image} )`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: 400,
    width: "100%",
    position: "relative",
  }))

  return (
    <StyledRelativeDiv>
      <Container maxWidth={maxWidth ? maxWidth : "xl"}>
        <StyledAbsoluteDiv>
          {component ? (
            component
          ) : (
            <>
              <Stack>
                {data?.price && (
                  <Stack direction="row" spacing={1}>
                    <Typography
                      sx={{
                        color: theme.palette.primary.main,
                      }}
                    >
                      $
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.primary.light,
                      }}
                    >
                      {data?.price && new Intl.NumberFormat().format( data.price )} el metro cuadrado
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.light,
                      }}
                    >
                      {data?.currency}
                    </Typography>
                  </Stack>
                )}
                <Typography
                  sx={{
                    mt: 2,
                    color: theme.palette.primary.light,
                  }}
                  variant="h6"
                >
                  {data?.name}
                </Typography>
                {data?.author && (
                  <Typography
                    sx={{
                      mt: 1,
                    }}
                    variant="body2"
                    color={theme.palette.primary.contrastText}
                  >
                    {data?.author}
                  </Typography>
                )}
                {data?.lat && data?.lng ? (
                  <a
                    style={{
                      color: "#E5A150",
                      alignItems: "center",
                      display: "flex",
                    }}
                    href={`https://www.google.com/maps/search/?api=1&query=${data.lat}%2C${data.lng}`}
                    target="_blank"
                  >
                    <FmdGood style={{ fontSize: 14 }} />
                    {data?.location}
                  </a>
                ) : (
                  <Typography
                    sx={{
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    {data?.location && <FmdGood style={{ fontSize: 14 }} />}
                    {data?.location}
                  </Typography>
                )}
                <Typography
                  sx={{
                    mt: 2,
                    display: {
                      xs: "inline",
                      md: "none",
                    },
                  }}
                  variant="body2"
                  color={theme.palette.primary.contrastText}
                >
                  {data?.description}
                </Typography>
              </Stack>
              <Stack sx={{ mt: 1 }} direction="row" flexWrap="wrap">
                {data?.features &&
                  data.features.map((item: any, index: number) => (
                    <Chip
                      key={index}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{
                        color: theme.palette.primary.contrastText,
                      }}
                      label={item.name}
                    />
                  ))}
              </Stack>
            </>
          )}
        </StyledAbsoluteDiv>
      </Container>
      <StyledLinearBackgroundDiv />
      {data?.image && <MyThemeComponent image={data.image} />}
      {gatsbyImage && ( // @ts-ignore
        <BgImage style={{ minHeight: 400 }} image={gatsbyImage} />
      )}
    </StyledRelativeDiv>
  )
}

export default CoverImage
