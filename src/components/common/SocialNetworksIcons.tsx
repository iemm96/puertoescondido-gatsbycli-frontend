import * as React from "react"
import { Stack } from "@mui/material"
import { Facebook, Instagram, YouTube } from "@mui/icons-material"
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok"
import useTheme from "@mui/material/styles/useTheme"

const SocialNetworksIcons = () => {
  const theme = useTheme()

  return (
    <Stack spacing={4} direction="row">
      <a href="https://www.facebook.com/grupoescondidopxm" target="_blank">
        <Facebook sx={{ color: theme.palette.text.primary }} />
      </a>
      <a href="https://www.tiktok.com/@grupoescondidopxm" target="_blank">
        <Tiktok size={24} style={{ color: theme.palette.text.primary }} />
      </a>
      <a href="https://www.instagram.com/grupoescondidopxm" target="_blank">
        <Instagram sx={{ color: theme.palette.text.primary }} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCFUKXzIphheZd_tHWW1yB4w"
        target="_blank"
      >
        <YouTube sx={{ color: theme.palette.text.primary }} />
      </a>
    </Stack>
  )
}

export default SocialNetworksIcons
