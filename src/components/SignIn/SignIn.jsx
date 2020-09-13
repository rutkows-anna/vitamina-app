import React from "react";
import { Container, Button, Link, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./SignIn.css";
import logo from "../image/logo.png";
import google from "../SignUp/google.svg";
import signin from "./signin.svg";
import firebase from "firebase";

const styles = (theme) => ({
  root: {
    height: "100vh",
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    maxWidth: "430px",
    margin: theme.spacing(1),
    "& label.Mui-focused": {
      color: "#272727",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#272727",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        color: "#272727",
        borderColor: "#272727",
        borderRadius: "8px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#272727",
      },
    },
    "& input:valid + fieldset": {
      borderColor: "#272727",
      borderWidth: 1,
    },
  },
  input: {
    width: "100%",
    maxWidth: "430px",
    color: "#272727",
    marginBottom: theme.spacing(2),
  },
  submit: {
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
  googleButton: {
    width: "100%",
    marginBottom: "2%",
    maxWidth: "430px",
    backgroundColor: "#ffff",
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    color: "#272727",
    textTransform: "none",
    border: "1px solid #272727",
    borderRadius: "8px",
  },
});
class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    errorStyle: false,
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userData) => {
        console.log(userData);
        /*this.props.onApp();*/
      })
      .catch((error) => {
        this.setState({
          error: "Nieudana próba logowania.",
          errorStyle: true,
        });
      });
  };

  setRegister = (event) => {
    event.preventDefault();
    this.props.onRegister();
  };

  setPassword = (event) => {
    event.preventDefault();
    this.props.onPassword();
  };

  handleOnLoginWithGoogle = (event) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = "pl";
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        firebase.database().ref(`/users/${user.uid}`).set({
          name: user.displayName,
          email: user.email,
        });
      })
      .catch((error) => {
        this.setState({
          error: "Nieudane logowanie za pomocą konta Google.",
          errorStyle: true,
        });
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="sm" className={classes.root}>
          <img src={logo} className="logo" alt="" />
          <img src={signin} className="signin-image" alt="" />
          <p>
            <span style={{ fontWeight: "600" }}>Kontynuuj</span> logowanie za
            pomocą <span style={{ fontWeight: "600" }}>konta</span>:
          </p>
          <Button
            className={classes.googleButton}
            onClick={this.handleOnLoginWithGoogle}
          >
            <img
              src={google}
              alt=""
              style={{ margin: "0px 5px", width: "22px" }}
            />{" "}
            Google
          </Button>
          <p>
            Lub <span style={{ fontWeight: "600" }}>zaloguj się</span> za pomocą
            poczty <span style={{ fontWeight: "600" }}>e-mail</span>.
          </p>
          <form
            className={classes.form}
            onSubmit={this.handleOnSubmit}
            noValidate
          >
            <TextField
              className={classes.input}
              label="E-mail"
              name="email"
              variant="outlined"
              size="small"
              autoComplete="username"
              value={this.state.email}
              onChange={this.handleOnChange}
              error={this.state.errorStyle}
            />
            <TextField
              className={classes.input}
              type="password"
              label="Hasło"
              name="password"
              variant="outlined"
              size="small"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleOnChange}
              helperText={this.state.error}
              error={this.state.errorStyle}
            />
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
            >
              Zaloguj się
            </Button>
          </form>

          <p style={{ textAlign: "center" }}>
            Nie posiadasz jeszcze konta?{" "}
            <Link
              onClick={this.setRegister}
              style={{ color: "#0098C9", fontWeight: "600", cursor: "pointer" }}
            >
              Zarejestruj się.
            </Link>
          </p>
          <p>
            Zapomniane hasło?{" "}
            <Link
              onClick={this.setPassword}
              style={{ color: "#0098C9", fontWeight: "600" }}
            >
              Przypomnimy.
            </Link>
          </p>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(SignIn);
