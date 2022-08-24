import { api } from './api';

const authService = {
  postLogin({
    username,
    password
  } = {}) {
    return api.call().post('/jwt-auth/v1/token', {
      username,
      password
    });
  }
}

export default authService;