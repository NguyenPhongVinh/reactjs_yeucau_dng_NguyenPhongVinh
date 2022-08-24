import authService from "../../services/auth";
// Action Type


// Action


// Action Async
export function actLoginAsync(params) {
  return async () => {
    try {
      const response = await authService.postLogin(params);
      return response.data;
    } catch (error) {
      return {
        token: ''
      };
    }
  }
}