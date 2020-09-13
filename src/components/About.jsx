import React, { Fragment } from "react";
import "./TeamMemberCard.css";
import ImageCarousel from "./AboutUsCarousel";
import AboutUsContent from "./AboutUsContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
    padding: 0,
  },
  x: {
    margin: 50,
  },

  container: {
    width: "90%",
    height: "90%",
    padding: "0px",

    display: "flex",
    flexWrap: "nowrap",

    boxShadow: "3px 3px 5px #aaaaaa",
  },

  imgCarousel: {
    gridArea: "img",
    width: "40%",
    height: "100%",
  },

  infoContent: {
    gridArea: "content",
    width: "60%",
  },
};

const classes = styles;

const About = () => (
  <Fragment>
    <Grid xs={12} className={classes.root}>
      <Container style={classes.container}>
        <ImageCarousel style={classes.imgCarousel} />

        <AboutUsContent style={classes.infoContent} />
      </Container>
    </Grid>
  </Fragment>
);

export default About;
