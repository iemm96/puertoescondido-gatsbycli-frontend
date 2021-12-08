import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "@mui/material"
import withTheme from "../components/theme"
import Banner from "../components/banner"

const IndexPage = () => (
  <>
    <Banner/>
    <Layout>
      <Seo title="Home" />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>

      <StaticImage
        src="../images/banner-1.jpg"
        alt="Banner image"
        formats={["auto"]}
        style={{
          webKitTransform: "scaleX(-1)",
          transform: "scaleX(-1)"
        }}
      />

      <Button variant="contained">
        Botón de ejemplo
      </Button>


      <div
        data-sal="slide-up"
        data-sal-delay="1200"
        data-sal-duration="600"
        data-sal-easing="ease"
      >

        <p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </p>
      </div>

    </Layout>
  </>
)

export default withTheme(IndexPage)
