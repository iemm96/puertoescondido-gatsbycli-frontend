import { createTheme } from "@mui/material/styles"

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    cardTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cardTitle?: React.CSSProperties;
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardTitle: true;
  }
}

export const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
    cardTitle: {
      color: '#023859',
      fontFamily: 'Poppins',
      fontSize: "1rem",
      fontWeight: 500
    },
    body2: {
      color: '#898F99'
    },
    subtitle1: {
      color: '#CD7D1E',
      fontWeight: 500
    },
    h5: {
      color: '#00A2A6',
    }
  },
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