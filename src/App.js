import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import OnBoarding from "./components/OnBoarding/OnBoarding";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import PasswordReset from "./components/SignIn/PasswordReset";
import About from "./components/About";
import ChallengeDescription from "./components/ChallengeDescription";
import Diary from "./components/diary/Diary";
import NavBar from "./components/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Challenges from "./components/Challenges";
import firebase from "firebase";

const Logged = "Logged";
const Login = "Login";
const Register = "Register";
const Password = "Password";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    minHeight: "100vh",
    flexGrow: 1,
    backgroundColor: "#eef1f3",
    padding: "10px",
  },
}));

function AppContent() {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <div className={classes.root}>
          <header>
            <NavBar />
          </header>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/about" component={About} />
              <Route exact path="/challenges" component={Challenges} />
              <Route path="/challenges/:id" component={ChallengeDescription} />
              <Route path="/diary" component={Diary} />
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

class App extends React.Component {
  state = {
    user: null,
  };

  handleLogin = () => {
    this.setState({
      user: Login,
    });
  };

  handleRegister = () => {
    this.setState({
      user: Register,
    });
  };

  handlePassword = () => {
    this.setState({
      user: Password,
    });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (firebase.auth().currentUser) {
        this.setState({
          user: Logged,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  render() {
    switch (this.state.user) {
      case Logged:
        return <AppContent />;
      case Login:
        return (
          <SignIn
            onRegister={this.handleRegister}
            onPassword={this.handlePassword}
          />
        );
      case Register:
        return <SignUp onLogin={this.handleLogin} />;
      case Password:
        return (
          <PasswordReset
            onLogin={this.handleLogin}
            onRegister={this.handleRegister}
          />
        );
      default:
        return (
          <OnBoarding
            onLogin={this.handleLogin}
            onRegister={this.handleRegister}
          />
        );
    }
  }
}

export default App;
