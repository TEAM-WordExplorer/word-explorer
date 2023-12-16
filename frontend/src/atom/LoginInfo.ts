import { atom } from 'recoil';

export const IsLoggedInState = atom({
  key: 'isLoggedIn',
  default: localStorage.getItem('isLoggedIn') === 'true',
});