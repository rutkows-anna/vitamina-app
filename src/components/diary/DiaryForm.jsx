import React from 'react';
import DiaryFormChart from './DiaryFormChart';
import styles from './Diary.module.css';
import { DATABASE_URL } from '../../index';
import firebase from 'firebase';

class DiaryForm extends React.Component {
  state = {
    value: 5,
    date: new Date().toLocaleDateString(),
    title: '',
    description: '',
    identity: firebase.auth().currentUser.email,
  }

  handleChangeCharForm = (value) => {
    this.setState({
       value: value,
    });
  }

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleOnClickLeaveForm = () => {
    this.props.onClickLeaveTheForm();
  }

  handleOnClickSaveForm = (e) => {
    e.preventDefault();
    fetch(`${DATABASE_URL}/diary.json`, {
      method: "POST",
      body: JSON.stringify(this.state),
    })
    this.props.onClickLeaveTheForm();
    this.props.onSaveForm();
  }


  render() {
    return (
        <section className={styles.diary__section}>
          <header className={styles.diary__header}>
            <h1 className={styles.diary__header__title}>Jak się dziś czujesz?</h1>
            <div className={styles.daily__value__box}>
              <DiaryFormChart value={this.setState.value} onChangeInForm={this.handleChangeCharForm}/>
            </div>
          </header>
            <form className={styles.diary__form} onSubmit={this.handleOnClickSaveForm}>
              <div className={styles.form__header}>
                <input
                className={styles.form__input}
                type='text'
                placeholder='Tytył wpisu'
                autoComplete='off'
                onChange={this.handleOnChange}
                name='title'
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                required ={true}
                />
              </div>
              <textarea
                className={styles.form__textarea}
                maxLength={1000}
                placeholder='To jest mieisce na Twoje dzisiejsze przemyślenia, postanowienia, odczucia, lub cokolwiek tylko zechcesz.' 
                onChange={this.handleOnChange}
                name='description'
                />
              <div className={styles.form__button__box}>
                <button className={styles.form__button} onClick={this.handleOnClickLeaveForm}>
                  Anuluj
                </button>
                <button type='submit' className={styles.form__button} >
                  Zapisz
                </button>
              </div>
            </form>
        </section>
    );
  }
}


export default DiaryForm;




