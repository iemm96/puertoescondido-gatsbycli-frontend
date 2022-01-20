import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { pages } from "./../constants";
import { Link } from "gatsby"

const Sidebar = React.forwardRef( (props:any, ref:any) => {
  const [open,setOpen] = React.useState(false);

  const toggle = () =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setOpen( !open );

      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

    }

  React.useImperativeHandle(ref,() => ({
    toggleDrawer: toggle()
  }))

  return(
    <Drawer
      anchor="right"
      open={open}
      onClose={ toggle() }
    >
      <Box
        role="presentation"
        onClick={ toggle() }
        onKeyDown={ toggle() }
      >
        <List>
          {pages.map((item, index) => (
            <Link to={item.href}>
              <ListItem button key={index}>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  )
});

export default Sidebar;