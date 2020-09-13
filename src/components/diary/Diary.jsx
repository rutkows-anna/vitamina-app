import React from "react";
import DiaryForm from './DiaryForm';
import DiaryDashboard from "./DiaryDashboard";
import { DATABASE_URL } from '../../index';
import firebase from 'firebase';

const startState = {
  posts: [{
    id: null,
    date: '',
    value: 0,
  }],
  diaryForm: false,
  postFilter: '',
}

class Diary extends React.Component {
  state = {
    posts: [{
      id: null,
      value: 0,
      date: '',
      title: '',
      description: '',
    }],
    diaryForm: false,
    postFilter: '',
  }

  fetchData = () => {
    const USER_EMAIL = firebase.auth().currentUser.email;
    fetch(`${DATABASE_URL}/diary.json?orderBy="identity"&equalTo="${USER_EMAIL}"`) //?orderBy="email"&equalTo="${USER_EMAIL}"'
    .then(response => response.json())
    .then(posts => {
      const arrayPosts = posts
      ? Object.keys(posts)
        .map(key => {
          return {
            id: key,
            ...posts[key],
          }
        })
      : startState.posts

        this.setState({
          posts: arrayPosts,
        })
    })
    .catch(() => {
      this.setState({
        posts: startState.posts,
      })
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  handleOnClickToForm = () => {
    this.setState({
      diaryForm: true,
    })
  }

  handleClickLeaveForm = () => {
    this.setState({
      diaryForm: false,
    })
  }

  handleSearch = (text) => {
    this.setState({
      postFilter: text,
    })
  }


  render() {
    return (
      <>
        {
          !this.state.diaryForm
          ? <DiaryDashboard
              posts={this.state.posts}
              postFilter={this.state.postFilter}
              data={this.state.posts}
              onKeyUpSearch={this.handleSearch}
              onClickToForm={this.handleOnClickToForm}
              onDelete={this.fetchData}
            />
          : <DiaryForm
              onSaveForm={this.fetchData}
              onClickLeaveTheForm={this.handleClickLeaveForm}
              />
        }
      </>
    );
  }
}

export default Diary;