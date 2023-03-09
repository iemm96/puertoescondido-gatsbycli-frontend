import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material"
import { Clear } from "@mui/icons-material"
import * as React from "react"

type FilterType = {
  enabledFilters: boolean
  priceRange: [number, number]
  squareMetersRange: [number, number]
  onlyFeaturedProperties: boolean
  location?: string
  categories?: any
}
export const useFiltersBox = (results: any) => {
  console.log(results)
  const [filteredResults, setFilteredResults] = React.useState(results)
  const [filters, setFilters] = React.useState<FilterType | null>({
    enabledFilters: false,
    priceRange: [0, 0],
    squareMetersRange: [0, 0],
    onlyFeaturedProperties: false,
    categories: [],
  });

  React.useEffect(() => {
    /*
    let enabledFilters = filters.enabledFilters
    enabledFilters = validateFilters()

    if (enabledFilters) {
      handleFilter()
    } else {
      setFilteredResults(results)
    }*/
  }, [filters])

  const validateFilters = () => {
    let hasFilters = false

    if (filters.categories.length > 0) hasFilters = true

    return hasFilters
  }

  const handleFilter = () => {
    const resultsArray = []
    results.map(result => {
      let suitable = true

      if (filters?.categories) {
        if (
          !filters.categories.find(category => {
            return category === result.category.name
          })
        ) {
          suitable = false
        }
      }

      if (suitable) {
        resultsArray.push(result)
      }
    })

    setFilteredResults(resultsArray)
  }

  const handleChange = () => {}

  return {
    filters,
    setFilters,
    handleChange,
    filteredResults,
  }
}

export const FiltersBox = ({
  filters,
  setFilters,
  handleChange,
  openSidebar,
  setOpenSidebar,
  responsiveMode,
  categories,
    defaultCategory
}: {
  filters: FilterType,
  setFilters: any,
  handleChange: any,
  openSidebar: boolean,
  setOpenSidebar: any,
  responsiveMode?: boolean,
  categories?: any,
    defaultCategory?: any,
}) => {
    React.useEffect(() => {
        if( defaultCategory ) {
            setFilters((prev:any) => ({
                ...prev,
                categories: [
                    ...prev.categories,
                    defaultCategory
                ]
            }))
        }
    },[ defaultCategory ]);

    const filterBoxFragment = () => (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        height: "100%",
      }}
      elevation={2}
    >
      <Stack direction="column">
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">Filtrar resultados</Typography>
          <Button size="small" startIcon={<Clear />}>
            Limpiar filtros
          </Button>
        </Box>
        <Stack sx={{ mt: 2 }} direction="column">
          <Typography variant="caption">Rango de precio</Typography>
          <Slider
            getAriaLabel={() => "Rango de precio"}
            value={filters?.currentPrice}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={() => ""}
          />
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="caption">Desde $100,000</Typography>
            <Typography variant="caption">Hasta $1,000,000</Typography>
          </Box>
          <Typography sx={{ mt: 2 }} variant="caption">
            Metros cuadrados
          </Typography>
          <Slider
            getAriaLabel={() => "Metros cuadrados"}
            value={filters?.currentSquareMeters}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={() => ""}
          />
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="caption">Desde 50m2</Typography>
            <Typography variant="caption">Hasta 1,000m2</Typography>
          </Box>
        </Stack>
        <Stack sx={{ mt: 2 }} direction="column">
          <Typography variant="caption">Zonas</Typography>
          {/*
                                         <FormControl component="fieldset" variant="standard">
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                        }
                        label="Cerca de la playa"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                        }
                        label="Terreno plano"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                        }
                        label="Cerca del centro"
                    />
                </FormControl>

                        */}
        </Stack>
        <Stack sx={{ mt: 2 }} direction="column">
          <Typography variant="caption">Ubicaciones</Typography>
          {/*
                                            <FormControl component="fieldset" variant="standard">
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                            }
                            label="Brisas Zicatela"
                        />
                    </FormControl>
                         */}
        </Stack>
        {categories.length > 0 && (
          <Stack sx={{ mt: 2 }} direction="column">
            <Typography variant="caption">Categorías</Typography>
            {categories.map((category: any, index: number) => (
              <FormControl key={index} component="fieldset" variant="standard">
                <FormControlLabel
                  onChange={(e: any) => {
                    const checked = e.target.checked
                    const currentCategories = filters.categories

                    if (checked) {
                      if (!currentCategories.find(cat => cat === category.name))
                        currentCategories.push(category.name)
                    } else {
                      currentCategories.splice(
                        currentCategories.indexOf(category.name),
                        1
                      )
                    }

                    setFilters((prev: any) => ({
                      ...prev,
                      enabledFilters: true,
                      categories: currentCategories,
                    }))
                  }}
                  control={<Checkbox                   defaultChecked={ category.name === defaultCategory }
                                                       size="small" name={category.name} />}
                  label={category.name}
                />
              </FormControl>
            ))}
          </Stack>
        )}

        <hr />
        {/*
                    <FormControl component="fieldset" variant="standard">
                    <FormControlLabel
                        control={
                            <Checkbox checked={ filters.onlyFeaturedProperties } onChange={ () => {
                                setFilters( (prev:any) => ({
                                    ...prev,
                                    onlyFeaturedProperties: !filters.onlyFeaturedProperties
                                }))
                            }} name="only_featured_properties" />
                        }
                        label="Sólo propiedades destacadas"
                    />
                </FormControl>
                     */}
      </Stack>
    </Paper>
  )
  return responsiveMode ? (
    <Drawer
      anchor="left"
      open={openSidebar}
      onClose={() => setOpenSidebar(!openSidebar)}
    >
      {filterBoxFragment()}
    </Drawer>
  ) : (
    filterBoxFragment()
  )
}
