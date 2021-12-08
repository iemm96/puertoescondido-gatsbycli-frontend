import { createTheme } from "@mui/material/styles"

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export const defaultTheme = createTheme({
  palette: {
    neutral: {
      main: '#fff',
    },
    primary: {
      main: '#00A2A6',
      contrastText: '#fff'
    },
    secondary: {
      main: '#CD7D1E'
    },

  },
});