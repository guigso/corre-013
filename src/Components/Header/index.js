import React from "react";

import { AppBar, IconButton, Drawer, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Menu from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Home from "@material-ui/icons/HomeOutlined";
import Router from "next/router";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: "flex",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color='inherit'
            aria-label='go home'
            edge='start'
            onClick={() => Router.push("/")}>
            <Home />
          </IconButton>
          <Typography variant='h6' noWrap className={classes.title}>
            CORRE 013
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.drawerHeader} />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          CORRE 013
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => Router.push("/produtos")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Produtos' />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={() => Router.push("/produtos")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Produtos' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
