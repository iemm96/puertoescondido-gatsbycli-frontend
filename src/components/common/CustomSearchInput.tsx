import * as React from "react"
import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import {
  ArrowDropDown,
  ArrowDropDownCircleSharp,
  Close,
  FilterList,
} from "@mui/icons-material"
import useTheme from "@mui/material/styles/useTheme"
import { useFlexSearch } from "react-use-flexsearch"
import { navigate } from "gatsby"
import { Box, CardActionArea, Collapse, Grow, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"

function truncate(str, max) {
  return str.length > max ? str.substr(0, max - 1) + "…" : str
}

export const unFlattenResults = results =>
  results.map(post => {
    const { name, description, slug } = post
    return { slug, project: { name, description } }
  })

export const useCustomSearchInput = (
  index: any | null,
  store: any | null,
  query: string | undefined,
  items?: any
) => {
  const [querySearch, setQuerySearch] = React.useState<string | undefined>(
    query
  )
  const [iterableResults, setIterableResults] = React.useState<any>(items || [])
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false)
  const [itemList, setItemList] = React.useState<boolean>(false)

  let results: any = null

  if (index && store) {
    results = unFlattenResults(useFlexSearch(querySearch, index, store))
  }

  const handleSearch = () => {
    if (!items) {
      setIterableResults(results)
    }
  }

  React.useEffect(() => {
    handleSearch()
  }, [querySearch, query])

  const handleItemsList = () => {
    console.log("here!")
    if (items) {
      setItemList(!itemList)
    } else {
      if (querySearch && iterableResults.length > 0) {
        setItemList(!itemList)
      }
    }
  }

  return {
    querySearch,
    setQuerySearch,
    handleSearch,
    iterableResults,
    setIterableResults,
    openSidebar,
    setOpenSidebar,
    handleItemsList,
    itemList,
  }
}

export const CustomSearchInput = ({
  querySearch,
  setQuerySearch,
  handleSearch,
  iterableResults,
  setIterableResults,
  openSidebar,
  setOpenSidebar,
  redirectTo,
  hideFiltersButton,
  useAsSelect,
  handleItemsList,
  itemList,
}: {
  querySearch: string | undefined
  setQuerySearch: any
  handleSearch: any
  iterableResults: any
  setIterableResults?: any
  openSidebar?: boolean
  setOpenSidebar?: any
  redirectTo?: string | undefined
  hideFiltersButton?: boolean
  useAsSelect?: boolean
  handleItemsList?: any
  itemList: boolean
}) => {
  const textInput = React.useRef(null)
  const theme = useTheme()

  console.log("itemList ", itemList)
  return (
    <Box>
      <Paper
        component="form"
        sx={{
          borderRadius: 4,
          backgroundColor: "#EBF2FF",
          p: 0,
          display: "flex",
          position: "relative",
          alignItems: "center",

          width: {
            xs: 320,
            md: 420,
          },
        }}
      >
        {!hideFiltersButton && (
          <IconButton
            sx={{
              p: "10px",
              display: {
                xs: "inline",
                lg: "none",
              },
            }}
            aria-label="menu"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <FilterList />
          </IconButton>
        )}
        <InputBase
          inputRef={textInput}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13) {
              e.preventDefault()
              if (redirectTo) {
                navigate(`${redirectTo}?search=${querySearch}`)
                return
              }
              handleSearch()
            }
          }}
          onChange={e => setQuerySearch(e.target.value)}
          onClick={handleItemsList}
          defaultValue={querySearch ? querySearch : undefined}
          sx={{
            pl: {
              md: 1,
              xs: 0,
            },
            ml: 1,
            flex: 1,
          }}
          placeholder="Cerca de la playa, terreno, etc..."
          inputProps={{ "aria-label": "buscar" }}
          value={querySearch}
        />
        {textInput?.current?.value !== "" && (
          <IconButton
            sx={{
              zIndex: 3,
            }}
            onClick={() => {
              if (redirectTo) {
                navigate(`${redirectTo}?search=${querySearch}`)
                return
              }
              textInput.current.value = ""
              setIterableResults([])
              setQuerySearch(undefined)
            }}
          >
            <Close />
          </IconButton>
        )}
        <IconButton
          onClick={handleSearch}
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: "0 16px 16px 0",
            p: "16px",
            color: "white",
          }}
          aria-label="buscar"
        >
          {useAsSelect ? <ArrowDropDown /> : <SearchIcon />}
        </IconButton>
      </Paper>
      <Grow
        in={itemList}
        style={{ transformOrigin: "0 0 0" }}
        {...(itemList ? { timeout: 1000 } : {})}
      >
        <Paper
          elevation={4}
          sx={{
            p: 1,
            position: "absolute",
            zIndex: 2,
            minHeight: 100,
            marginLeft: "-16px",
            mt: 4,
          }}
        >
          {iterableResults && iterableResults.length > 0
            ? iterableResults.map((val: any, index: number) => (
                <Card
                  key={index}
                  sx={{
                    p: 1,
                    borderRadius: 0,
                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                    position: "relative",
                  }}
                  elevation={0}
                >
                  <CardActionArea
                    onClick={() => navigate(`/propiedad/${val.slug}`)}
                  >
                    <CardContent>
                      <Typography color="secondary" variant="h6">
                        {val?.project?.name ? val.project.name : val}
                      </Typography>
                      {val?.project?.description && (
                        <Collapse
                          in={true}
                          collapsedSize={20}
                          timeout="auto"
                          unmountOnExit
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: val.project.description,
                            }}
                          />
                        </Collapse>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            : querySearch &&
              iterableResults.length === 0 && (
                <Typography>
                  No se encontraron resultados para la búsqueda "{querySearch}"
                </Typography>
              )}
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 3,
            }}
            onClick={() => {
              textInput.current.value = ""
              setIterableResults([])
              setQuerySearch(undefined)
            }}
          >
            <Close />
          </IconButton>
        </Paper>
      </Grow>
    </Box>
  )
}
