import * as React from "react"
import Box from "@mui/material/Box"

type GradientBoxProps = {
  fullHeight?: boolean
  height?: number
  children?: JSX.Element
  position?: "absolute" | "relative"
}

const GradientBox = ({
  height,
  children,
  position,
  fullHeight,
}: GradientBoxProps) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(233,225,215,1) 0%, rgba(255,255,255,1) 100%)",
        height: fullHeight ? "160vh" : height,
        width: "100%",
        zIndex: -1,
        position: position ? position : "relative",
      }}
    >
      {children && children}
    </Box>
  )
}

export default GradientBox
