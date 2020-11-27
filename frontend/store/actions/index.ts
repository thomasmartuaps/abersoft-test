import axios from 'axios';

// const baseUrl = 'http://192.168.88.8:3000';

export const SET_USER = 'SET_USER';

interface SetUserData {
  email: string;
  token: string;
}

export const setUser = (data: SetUserData) => {
  return {
    type: SET_USER,
    payload: data,
  }
}