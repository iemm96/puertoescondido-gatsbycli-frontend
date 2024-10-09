import * as React from "react"
import { useState } from "react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import ArrowCircleRightOutlined from "@mui/icons-material/ArrowCircleRightOutlined"
import loadable from "@loadable/component"
import Box from "@mui/material/Box"

const ProjectCard = loadable(() => import("./ProjectCard"))

const TopProjects = ({
  fullScreen,
}: {
  attached?: boolean
  fullScreen?: boolean
}) => {
  const [properties, setProperties] = useState<any>([])

  const data = useStaticQuery(graphql`
    query FeaturedItemsQuery {
      allProperty(
        filter: { isFeatured: { eq: true }, isVisible: { eq: true } }
        limit: 4
      ) {
        edges {
          node {
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  width: 280
                  placeholder: BLURRED
                  quality: 80
                  formats: [WEBP, AVIF]
                )
              }
            }
            name
            timeFromDowntown
            nearToBeaches
            uid
            slug
            price
            measures_unit
            isFeatured
            isProject
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    if (data?.allProperty?.edges) {
      setProperties(data.allProperty.edges)
    }
  }, [data])

  return (
    <>
      {properties.length > 0 && (
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(234,227,217,1) 0%, rgba(255,255,255,1) 100%)",
            height: {
              xs: "auto",
            },
            width: "100%",
            pt: 4,
            pb: 2,
          }}
        >
          <Container
            sx={{
              pl: 2,
              p: "0 !important",
            }}
            maxWidth="xl"
          >
            <Grid
              sx={{
                mb: {
                  xs: fullScreen ? 0 : 2,
                },
              }}
              container
              justifyContent="space-between"
              spacing={1}
            >
              {properties.map((property: any, index: number) => (
                <Grid item xs={12} md={3}>
                  {ProjectCard && (
                    <ProjectCard key={index} data={property.node} />
                  )}
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent="right" display="flex">
              <Grid item>
                <Button
                  startIcon={<ArrowCircleRightOutlined />}
                  sx={{ textTransform: "none" }}
                  color="primary"
                  onClick={() => navigate("/propiedades")}
                  variant="contained"
                >
                  {"Ver todas las propiedades"}
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  )
}

export default TopProjects
