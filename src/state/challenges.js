import { DATABASE_URL } from '../index';

// INITIAL STATE
const initialState = {
  data: [],
}

//ACTIONS
const SET_CHALLENGES = 'SET_CHALLENGES'

//REDUCER
export const challenges = (state = initialState, action) => {
  switch(action.type) {
    case SET_CHALLENGES:
      return {
        data: action.payload,
      }
    default:
      return state;
  }
}

//ACTION CREATORS
export const setChanllenges = (challenges) => ({type: SET_CHALLENGES, payload: challenges});

export const fetchChallenges = () => {
  return (dispatch) => {
    fetch(`${DATABASE_URL}/challenges.json`)
      .then(resp => resp.json())
      .then(data => {
        const formattedData = data
        ? Object.keys(data)
            .map(key => ({id: key, ...data[key]}))
        : []

        dispatch(setChanllenges(formattedData))
      })
  }
}

export const changeStatusOnProgress = (challengeId, data) => {
  return (dispatch) => {
    fetch(`${DATABASE_URL}/challenges/${challengeId}.json`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
    .then(() => dispatch(fetchChallenges()))
  }
}

export const changeStatusOnDone = (challengeId, data) => {
  return(dispatch) => {
    fetch(`${DATABASE_URL}/challenges/${challengeId}.json`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
    .then(() => dispatch(fetchChallenges()));
  }
}
