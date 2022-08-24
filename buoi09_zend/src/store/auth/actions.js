import { authService } from "../../services/auth";
// Action Type
export const ACT_LOGIN_SUCCESS = 'ACT_LOGIN_SUCCESS';
export const ACT_LOGOUT = 'ACT_LOGOUT';

// Action
export function actLoginSuccess({ user, token }) {
  return {
    type: ACT_LOGIN_SUCCESS,
    payload: {
      user,
      token
    }
  }
}

export function actLogout() {
  return {
    type: ACT_LOGOUT,
    payload: {}
  }
}

// Action Async
export function actFetchMeAsync(token) {
  if (!token) {
    token = localStorage.getItem('access_token');
  }
  return async dispatch => {
    try {
      const response = await authService.fetchMe(token);
      const user = response.data;
      dispatch(actLoginSuccess({ user, token }))
      return {
        ok: true
      }
    } catch (error) {
      console.log('error', error);
      return {
        ok: false,
        error: error
      }
    }
  }
}

export function actLoginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const token = response.data.token;
      const responseMe = await dispatch(actFetchMeAsync(token));
      return {
        ok: responseMe.ok,
        error: responseMe.error
      }
    } catch (error) {
      return {
        ok: false,
        error: 'Username hoặc Password không hợp lệ!'
      }
    }
  }
}

export function actactRegisterAsync({ nickname, username, email, password }) {
  return async (dispatch) => {
    try {
      const response = await authService.register({ nickname, username, email, password });
      const responseLogin = await dispatch(actLoginAsync(username, password));
      return {
        ok: responseLogin.ok,
        error: responseLogin.error
      }
    } catch (error) {
      return {
        ok: false,
        code: error.response.data.code,
      }
    }
  }
}
