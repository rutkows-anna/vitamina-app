import React from "react";
import {
  Container,
  Button,
  Link,
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import logo from "../image/logo.png";
import google from "./google.svg";

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
    marginBottom: theme.spacing(3),
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

class SignUp extends React.Component {
  state = {
    name: "",
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
  validation = (error) => {
    if (error.code == "auth/invalid-email") {
      return "Niepoprawny adres e-mail.";
    } else if (error.code == "auth/weak-password") {
      return "Hasło musi posiadać co najmniej 6 znaków.";
    } else {
      return "Nieudana próba rejestracji.";
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userData) => {
        console.log(userData);
        const user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: this.state.name,
          })
          .then(() => {
            firebase.database().ref(`/users/${user.uid}`).set({
              name: this.state.name,
              email: this.state.email,
            });
          });
      })
      .catch((error) => {
        this.setState({
          error: this.validation(error),
          errorStyle: true,
        });
        console.log(error.code);
      });
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
          error: "Nieudana rejestracja za pomocą konta Google.",
          errorStyle: true,
        });
      });
  };
  setLogin = (event) => {
    event.preventDefault();
    this.props.onLogin();
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="sm" className={classes.root}>
          <img src={logo} className="logo" alt="" />
          <p>
            <span style={{ fontWeight: "600" }}>Kontynuuj</span> rejestrację za
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
            Lub <span style={{ fontWeight: "600" }}>zarejestruj się</span> za
            pomocą poczty <span style={{ fontWeight: "600" }}>e-mail</span>.
          </p>

          <form
            className={classes.form}
            onSubmit={this.handleOnSubmit}
            noValidate
          >
            <TextField
              className={classes.input}
              label="Imię"
              name="name"
              variant="outlined"
              size="small"
              value={this.state.name}
              onChange={this.handleOnChange}
              error={this.state.errorStyle}
            />
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
              error={this.state.errorStyle}
              helperText={this.state.error}
            />
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
            >
              Zarejestruj się
            </Button>
          </form>

          <p
            style={{
              margin: "0px 0px 5% 0px",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Kontynuując <span style={{ fontWeight: "600" }}>zgadzasz się</span>{" "}
            na naszą{" "}
            <Link
              onClick={(event) => event.preventDefault()}
              style={{ color: "#0098C9", fontWeight: "600", cursor: "pointer" }}
            >
              politykę prywatności.
            </Link>
          </p>
          <p>
            Posiadasz już konto?{" "}
            <Link
              onClick={this.setLogin}
              style={{ color: "#0098C9", fontWeight: "600", cursor: "pointer" }}
            >
              Zaloguj się.
            </Link>
          </p>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(SignUp);
