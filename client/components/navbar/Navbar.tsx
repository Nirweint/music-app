import React from 'react';
import {useRouter} from "next/router";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import Mail from '@mui/icons-material/Mail';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AppBar from "@mui/material/AppBar";
import ListItem from "@mui/material/ListItem";
import {PATH} from "../../constants";

const menuItems = [
  {
    text: 'Main', href: PATH.MAIN
  },
  {
    text: 'Tracks list', href: PATH.TRACKS
  },
  {
    text: 'Albums list', href: PATH.ALBUMS
  },
];

const drawerWidth = 240;

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{mr: 2, ...(open && {display: 'none'})}}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft/>
          </IconButton>
        </div>
        <List>
          {menuItems.map(({text, href}, index) => {
            const handleRouterClick = () => {
              return router.push(href)
            }
            return (
              <ListItem button key={href} onClick={handleRouterClick}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInbox/> : <Mail/>}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </Box>
  );
}