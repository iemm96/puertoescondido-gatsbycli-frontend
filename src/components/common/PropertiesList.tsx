import * as React from "react"
import Grid from "@mui/material/Grid"
import { fetchRecords } from "../../actions/fetchRecords"
import PropertyCard from "../PropertyCard"

const PropertiesList = () => {
  const [properties, setProperties] = React.useState<any>([])

  React.useEffect(() => {
    getFeaturedProperties().then()
  }, [])

  const getFeaturedProperties = async () => {
    const { properties } = await fetchRecords("properties")

    setProperties(properties)
  }

  return (
    <Grid spacing={2} container>
      {properties.length > 0 &&
        properties.map((item: any, index: number) => (
          <Grid xs={12} md={3} item>
            <PropertyCard data={item} key={index} />
          </Grid>
        ))}
    </Grid>
  )
}

export default PropertiesList
