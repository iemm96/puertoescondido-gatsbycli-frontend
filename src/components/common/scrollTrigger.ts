import { useScrollTrigger } from "@mui/material"

export const scrollTrigger = (disableHysteresis, threshold) => {
  const trigger = useScrollTrigger({
    disableHysteresis: disableHysteresis ? disableHysteresis : true,
    threshold: threshold ? threshold : 20,
  })

  return trigger
}
