import { nanoid } from '@reduxjs/toolkit';

import { NETWORK_LATENCY } from '../utils/constants';
import { getUser } from './userAPI';
import Swal from "sweetalert2";

export function signin({ username, password }, apiContext = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      if (username === 'glenn' && password === 'koifish') {
        try {
          const token = `${username}:${nanoid()}`;
          const user = await getUser(username, { token });
          return resolve({ token, user });
        } catch (e) {
          return reject(e);
        }
      }

      return reject(
        new Error(
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Invalid username and password. Please login with (username: hai , password: 1)'
            })
        )
      );
    }, NETWORK_LATENCY);
  });
}

export function signout(apiContext = {}) {
  return new Promise((resolve) => {
    setTimeout(resolve, NETWORK_LATENCY);
  });
}
