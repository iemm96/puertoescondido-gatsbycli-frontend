import * as React from "react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import ChevronRight from "@mui/icons-material/ChevronRight"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { navigate } from "gatsby"
import Button from "@mui/material/Button"
import useTheme from "@mui/material/styles/useTheme"
import { FC } from "react"
import loadable from "@loadable/component"
interface FunctionalComponentPropsType {
  key?: number
  data?: any
}

type SliderContainerType = {
  title?: string
  subtitle?: string
  settings?: any
  data?: any
  viewMoreButton?: boolean
  viewMoreButtonText?: string
  viewMoreButtonRedirectPath?: string
  attached?: boolean
  fullScreen?: boolean
  Component?: FC<FunctionalComponentPropsType>
}

const PropertyCard = loadable(() => import("./PropertyCard"))
const SwiperComponent = loadable(
  () => import("./../components/common/SwiperComponent")
)

const SliderContainer = ({
  title,
  subtitle,
  data,
  Component,
  viewMoreButtonRedirectPath,
  viewMoreButton,
  viewMoreButtonText,
  attached,
  fullScreen = false,
}: SliderContainerType) => {
  const theme = useTheme()
  const [swiperDef, setSwiperDef] = React.useState<any>([])
  const [swiperState, setSwiperState] = React.useState<any>({
    isBeginning: true,
    isEnd: false,
  })

  const arrowButtonStyles = {
    borderRadius: 2,
    height: 40,
  }

  return (
    <>
      {SwiperComponent ? (
        <Container
          maxWidth={!fullScreen ? "xl" : false}
          sx={{
            pl: 2,
            p: attached || fullScreen ? "0 !important" : 2,
          }}
        >
          <Grid
            sx={{
              mb: {
                xs: fullScreen ? 0 : 2,
              },
            }}
            container
            justifyContent="space-between"
          >
            {!attached && !fullScreen && (
              <Grid item>
                <Typography sx={{ fontWeight: 600, mb: 1 }} variant="h5">
                  {subtitle}
                </Typography>
              </Grid>
            )}

            <Grid
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                width: "100%",
              }}
              item
            >
              {viewMoreButton && !attached && !fullScreen && (
                <Button
                  sx={{ textTransform: "none" }}
                  color="primary"
                  onClick={() =>
                    navigate(
                      viewMoreButtonRedirectPath
                        ? `/${viewMoreButtonRedirectPath}`
                        : "/"
                    )
                  }
                  variant="contained"
                >
                  {viewMoreButtonText ? viewMoreButtonText : "Ver más"}
                </Button>
              )}

              {!fullScreen && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ width: "100%" }}
                >
                  <Typography variant="subtitle1">{title}</Typography>
                  <Box>
                    <IconButton
                      sx={arrowButtonStyles}
                      disabled={swiperState.isBeginning}
                      onClick={() => (swiperDef ? swiperDef.slidePrev() : "")}
                    >
                      <ChevronLeft />
                    </IconButton>
                    <IconButton
                      sx={{
                        borderRadius: 2,
                        height: 40,
                      }}
                      disabled={swiperState.isEnd}
                      onClick={() => (swiperDef ? swiperDef.slideNext() : "")}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
          {
            <SwiperComponent
              setSwiperState={setSwiperState}
              setSwiperDef={setSwiperDef}
              fullScreen={fullScreen}
              attached={attached}
              Component={Component}
              PropertyCard={PropertyCard}
              data={data}
              theme={theme}
              swiperDef={swiperDef}
              disableAutoPlay={true}
            />
          }

          <Box
            sx={{
              mt: 4,
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "center",
            }}
          >
            {viewMoreButton && !attached && (
              <Button
                sx={{ textTransform: "none" }}
                color="primary"
                onClick={() =>
                  navigate(
                    viewMoreButtonRedirectPath
                      ? `/${viewMoreButtonRedirectPath}`
                      : "/"
                  )
                }
                variant="contained"
              >
                {viewMoreButtonText ? viewMoreButtonText : "Ver más"}
              </Button>
            )}
          </Box>
        </Container>
      ) : (
        <></>
      )}
    </>
  )
}

export default React.forwardRef(SliderContainer)
