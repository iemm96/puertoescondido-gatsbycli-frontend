import * as React from "react"
import { createTheme,ThemeProvider } from "@mui/material"

const Theme = (props:any) => {
  const { children } = props;

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#00A2A6'
      }
    }
  });

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export default function withTheme(Component:any) {
  return (props?:any) => {
    return(
      <Theme>
        <Component {...props}/>
      </Theme>
    )
  }
}