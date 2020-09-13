import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    fontSize: '1.5em',
    padding: theme.spacing(2),
    textAlign: 'center',
    flexGrow: 1,
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontSize: '1.8em',
    },
  },
  titleDiv: {
    wight: '200px',
    [theme.breakpoints.up('sm')]: {
      wight: '300px',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.grey['500'], 0.25),
    },
    marginLeft: 0,
    width: '57px',
    [theme.breakpoints.up('xs')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    border: 'none',
    borderRadius: '5px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '100px',
      '&:focus': {
        width: '10ch',
        border: '1px solid #ccc',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '100px',
      '&:focus': {
        width: '20ch',
        border: '1px solid #ccc',
      },
    },
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolBar: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  }
}));


export default function SearchAppBar(props) {
  const classes = useStyles();

  const handleSearch = (e) => {
    props.onKeyUpSearch(e.target.value);
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" 
      style={{
          backgroundColor: '#eef1f3', 
          color: '#000', 
          boxShadow: 'none',
      }}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.titleDiv}>
          <Typography className={classes.title}>
            Historia wpisów
          </Typography>
          </div>
          <div className={classes.div}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Znajdź wpis"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyUp={handleSearch}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
