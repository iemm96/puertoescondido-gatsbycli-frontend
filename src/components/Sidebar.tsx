import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { pages } from "./../constants"
import { navigate } from "gatsby"
import StyledButton from "../styled/StyledButton"

const Sidebar = React.forwardRef((props: any, ref: any) => {
  const [open, setOpen] = React.useState(false)

  const toggle = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(!open)

    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
  }

  React.useImperativeHandle(ref, () => ({
    toggleDrawer: toggle(),
  }))

  return (
    <Drawer anchor="right" open={open} onClose={toggle()}>
      <Box role="presentation" onClick={toggle()} onKeyDown={toggle()}>
        <List>
          {pages.map((item, index) => (
            <ListItem onClick={() => navigate(item.href)} button key={index}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem onClick={() => navigate("/contacto")} button>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  )
})

export default Sidebar
