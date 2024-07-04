/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import { ThemeProvider } from "@mui/material/styles"
import { defaultTheme, defaultThemeDark } from "../theme/Theme"
import ScrollHeader from "./ScrollHeader"
import FloatingContactButton from "./common/FloatingContactButton"
import BackToTopButton from "./common/BackToTopButton"

const Layout = ({ children, scrollTrigger, persistentHeader = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {scrollTrigger && (
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        )}
        <ScrollHeader
          siteTitle={data.site.siteMetadata?.title || `Title`}
          scrollTrigger={scrollTrigger}
          persistentHeader={persistentHeader}
        />
        <FloatingContactButton />
        <BackToTopButton />
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <main>{children}</main>
          <ThemeProvider theme={defaultThemeDark}>
            <Footer />
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  scrollTrigger: PropTypes.bool,
}

export default Layout
