import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import NoteRoundedIcon from "@material-ui/icons/NoteRounded";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { FacebookShareButton } from "react-share";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import firebase from "firebase";

const drawerWidth = 240;
const shareUrl = "http://app.vitamina.jfdz14.is-academy.pl/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "#00BBD5",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  listItem: {
    color: "#0098c9",
    textDecoration: "none",
  },
  btnShare: {
    width: "100%",
  },
  iconStyle: {
    color: "#0098c9",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOnSignOutClick = () => {
    firebase.auth().signOut();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ background: "white" }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Logo />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} className={classes.iconStyle}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to="/" className={classes.listItem}>
            <ListItem button>
              <ListItemIcon>
                <HomeRoundedIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink to="/diary" className={classes.listItem}>
            <ListItem button>
              <ListItemIcon>
                <NoteRoundedIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Dziennik" />
            </ListItem>
          </NavLink>
          <NavLink to="/challenges" className={classes.listItem}>
            <ListItem button>
              <ListItemIcon>
                <FormatListBulletedRoundedIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Wyzwania" />
            </ListItem>
          </NavLink>
          <NavLink to="/about" className={classes.listItem}>
            <ListItem button>
              <ListItemIcon>
                <InfoRoundedIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="O nas" />
            </ListItem>
          </NavLink>
          <FacebookShareButton url={shareUrl} className={classes.btnShare}>
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText className={classes.listItem} primary="Udostępnij" />
            </ListItem>
          </FacebookShareButton>
        </List>
        <Divider />
        <NavLink
          to="/"
          onClick={handleOnSignOutClick}
          className={classes.listItem}
        >
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon className={classes.iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Wyloguj się" />
          </ListItem>
        </NavLink>
      </Drawer>
    </div>
  );
}
