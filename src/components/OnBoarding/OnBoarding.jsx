import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "./OnBoarding.css";
import {
  CssBaseline,
  Container,
  Button,
  Link,
  makeStyles,
} from "@material-ui/core";
import logo from "../image/logo.png";
import Slide1 from "./slide1.svg";
import Slide2 from "./slide2.svg";
import Slide3 from "./slide3.svg";

SwiperCore.use([Pagination]);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    width: "100%",
    maxWidth: "430px",
    marginBottom: theme.spacing(2),
    backgroundColor: "#0098C9",
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    color: "#fff",
    textTransform: "none",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#0098C9",
    },
  },
}));

const SliderConfigs = {
  spaceBetween: 50,
  slidesPerView: 1,
  pagination: { clickable: true },
};

const Slider = () => {
  return (
    <>
      <Swiper {...SliderConfigs}>
        <SwiperSlide>
          <img src={Slide1} className="slide-image" alt="" />
          <h1 className="slide-title">Witalność.</h1>
          <p className="slide-subtitle">
            Otrzymasz od nas{" "}
            <span style={{ fontWeight: "700" }}> codzienną</span> dawkę{" "}
            <span style={{ fontWeight: "700" }}>porad</span> jak prowadzić{" "}
            <span style={{ fontWeight: "700" }}>zdrowszy</span> tryb życia.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} className="slide-image" alt="" />
          <h1 className="slide-title">Odżywianie.</h1>
          <p className="slide-subtitle">
            Zapewnimy Ci dostęp do{" "}
            <span style={{ fontWeight: "700" }}>szybkich</span>, łatwych w{" "}
            <span style={{ fontWeight: "700" }}>przygotowaniu</span> i zdrowych{" "}
            <span style={{ fontWeight: "700" }}>posiłków</span>.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} className="slide-image" alt="" />
          <h1 className="slide-title">Aktywność.</h1>
          <p className="slide-subtitle">
            Codzienna dawka <span style={{ fontWeight: "700" }}>motywacji</span>{" "}
            oraz krótkie treningi{" "}
            <span style={{ fontWeight: "700" }}>poprawią</span> Twoją{" "}
            <span style={{ fontWeight: "700" }}>kondycję</span>.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const OnBoarding = (props) => {
  const classes = useStyles();

  const setLogin = (event) => {
    event.preventDefault();
    props.onLogin();
  };

  const setRegister = (event) => {
    event.preventDefault();
    props.onRegister();
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <img src={logo} className="logo" alt="" />
        <div className="slider-content">
          <Slider />
        </div>
        <Button
          className={classes.button}
          onClick={setRegister}
          variant="contained"
        >
          Zarejestruj się
        </Button>
        <p className="singin-text">
          Posiadasz już konto?
          <Link
            onClick={setLogin}
            style={{ color: "#0098C9", fontWeight: "600", cursor: "pointer" }}
          >
            {" "}
            Zaloguj się.
          </Link>
        </p>
      </Container>
    </>
  );
};

export default OnBoarding;
