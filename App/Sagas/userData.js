import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../Utils/api';
import {setUserInfo,
        setUserNotes,
        setUserRepos,
        addNote
}from '../Actions/userData';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchUserInfo(action) {
  console.log(action);
   try {
      const userInfo = yield call(api.getBio, action.payload.username);
      console.log(userInfo);
      yield put(setUserInfo(userInfo));
   } catch (e) {
     console.log(e.message);
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


export function* fetchUserNotes(action) {
   try {
      const userNotes = yield call(api.getNotes, action.payload.login);
      yield put(setUserNotes(userNotes));
   } catch (e) {
     console.log(e.message);
      yield put({type: "USER_NOTES_FETCH_FAILED", message: e.message});
   }
}

export function* fetchUserRepos(action) {
   try {
      const userRepos = yield call(api.getRepos, action.payload.login);
    
      yield put(setUserRepos(userRepos));
   } catch (e) {
      yield put({type: "USER_REPOS_FETCH_FAILED", message: e.message});
   }
}

export function* postNote(action) {
   try {
      const data = yield call(api.addNote, action.payload.login, action.payload.note);
    
      const userNotes = yield call(api.getNotes, action.payload.login);
      yield put(setUserNotes(userNotes));
   } catch (e) {
     console.log(e.message);
      yield put({type: "NOTE_POST_FAILED", message: e.message});
   }
}