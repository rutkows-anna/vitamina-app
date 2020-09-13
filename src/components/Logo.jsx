import React from "react";
import logo from "./image/logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "min(600px, 70%)",
    height: "100%",
  },
}));

const Logo = () => {
  const classes = useStyles();
  return <img src={logo} alt="VITAMINA" className={classes.logo} />;
};

export default Logo;
