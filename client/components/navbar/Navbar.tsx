import React, { useState } from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Mail from '@mui/icons-material/Mail';
import Menu from '@mui/icons-material/Menu';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

import { Path } from 'enums';
import { ReturnComponentType } from 'types';
import { isEven } from 'utils';

const menuItems = [
  {
    text: 'Main',
    href: Path.MAIN,
  },
  {
    text: 'Tracks list',
    href: Path.TRACKS,
  },
  {
    text: 'Albums list',
    href: Path.ALBUMS,
  },
];

const drawerWidth = 240;

export const Navbar = (): ReturnComponentType => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Music platform
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
            <ChevronLeft />
          </IconButton>
        </div>
        <List>
          {menuItems.map(({ text, href }, index) => {
            const handleRouterClick = (): Promise<boolean> => {
              return router.push(href);
            };

            return (
              <ListItem button key={href} onClick={handleRouterClick}>
                <ListItemIcon>{isEven(index) ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};
