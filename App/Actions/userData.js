/**
 * Created by stan229 on 5/27/16.
 */
import api from '../Utils/api';

export function setUserInfo(userInfo) {
  console.log("now: " + userInfo);
    return {
        type : 'SET_USER_INFO',
        userInfo
    };
};

export function setUserRepos(repos) {
    return {
        type : 'SET_USER_REPOS',
        repos
    };
};

export function setUserNotes(notes) {
  console.log(notes);
    return {
        type : 'SET_USER_NOTES',
        notes
    };
};


////////Actions for SAGAS///////

export function userInfoFetchRequested(username) {
    return {
        type : 'USER_FETCH_REQUESTED',
        payload: {username}
    };
};

export function userReposFetchRequested(login) {
    return {
        type : 'USER_REPOS_FETCH_REQUESTED',
        payload: {login}
    };
};

export function userNotesFetchRequested(login) {
    return {
        type : 'USER_NOTES_FETCH_REQUESTED',
        payload: {login}
    };
};

export function notePostRequested(login, note) {
    return {
        type : 'USER_NOTE_POST_REQUESTED',
        payload: {login, note}
    };
};

