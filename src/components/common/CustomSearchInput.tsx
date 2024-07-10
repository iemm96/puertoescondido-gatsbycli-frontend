import * as React from "react"
import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { ArrowDropDown, Close, FilterList } from "@mui/icons-material"
import useTheme from "@mui/material/styles/useTheme"
import { useFlexSearch } from "react-use-flexsearch"
import { navigate } from "gatsby"
import { Box, CardActionArea, Collapse, Grow, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

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
  const [iterableResults, setIterableResults] = React.useState<any>([])
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false)
  const [itemList, setItemList] = React.useState<boolean>(false)

  let results: any = items ? items : null

  if (index && store) {
    if (items && querySearch) {
      results = items.filter(s => s.name.toLowerCase().includes(querySearch))
    } else {
      if (querySearch) {
        results = unFlattenResults(useFlexSearch(querySearch, index, store))
      }
    }
  }

  const handleSearch = () => {
    setIterableResults(results)
  }

  React.useEffect(() => {
    handleSearch()
  }, [querySearch, query])

  const handleItemsList = () => {
    if (items) {
      setItemList(!itemList)
    } else {
      if (querySearch && iterableResults.length > 0) {
        setItemList(!itemList)
      }
    }
  }

  React.useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element)
    })

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element)
    })

    // Updating scrollSpy when the component mounts.
    scrollSpy.update()

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])

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
  placeholder,
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
  placeholder: string
}) => {
  const textInput = React.useRef(null)
  const theme = useTheme()

  const handleScroll = item => {
    scroller.scrollTo(item, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50, // Scrolls to element + 50 pixels down the page
      // ... other options
    })
  }
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
          placeholder={placeholder}
          inputProps={{ "aria-label": "buscar" }}
          value={querySearch}
        />
        {textInput?.current?.value !== "" && (
          <IconButton
            sx={{
              zIndex: 3,
            }}
            onClick={() => {
              textInput.current.value = ""
              setIterableResults([])
              setQuerySearch(undefined)
              if (useAsSelect) {
                handleItemsList()
                return
              }
              if (redirectTo) {
                navigate(`${redirectTo}?search=${querySearch}`)
                return
              }
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
                    onClick={() =>
                      useAsSelect
                        ? handleScroll(val.name)
                        : navigate(`/propiedad/${val.slug}`)
                    }
                  >
                    <CardContent>
                      <Typography color="secondary" variant="h6">
                        {val?.project?.name ? val.project.name : val.name}
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
              if (!useAsSelect) {
                setIterableResults([])
              }
              handleItemsList()
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
