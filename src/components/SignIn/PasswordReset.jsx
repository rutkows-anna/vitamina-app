import React from "react";
import { Container, Button, Link, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import logo from "../image/logo.png";

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
});

class PasswordReset extends React.Component {
  state = {
    email: "",
    text: null,
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
    const auth = firebase.auth();
    const emailAddress = this.state.email;

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(() => {
        this.setState({
          text: "Sprawdź swoją pocztę e-mail. Wysłaliśmy link do resetu hasła.",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Niepoprawny adres e-mail.",
          errorStyle: true,
        });
      });
  };

  setLogin = (event) => {
    event.preventDefault();
    this.props.onLogin();
  };
  setRegister = (event) => {
    event.preventDefault();
    this.props.onRegister();
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="sm" className={classes.root}>
          <img src={logo} className="logo" alt="" />
          <p style={{ margin: "5% 0", textAlign: "center" }}>
            Wprowadź adres <span style={{ fontWeight: "600" }}>e-mail </span>,
            aby zresetować <span style={{ fontWeight: "600" }}> hasło </span>do
            swojego <span style={{ fontWeight: "600" }}> konta</span>.
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
              helperText={this.state.error}
            />
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
            >
              Zresetuj hasło
            </Button>
          </form>

          <p style={{ margin: "5% 0", textAlign: "center", fontWeight: "600" }}>
            {this.state.text}
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
          <p style={{ textAlign: "center" }}>
            Nie posiadasz jeszcze konta?{" "}
            <Link
              onClick={this.setRegister}
              style={{ color: "#0098C9", fontWeight: "600", cursor: "pointer" }}
            >
              Zarejestruj się.
            </Link>
          </p>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(PasswordReset);
