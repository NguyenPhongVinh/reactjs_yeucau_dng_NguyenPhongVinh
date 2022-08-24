import { handleHashMenu } from "../../helpers";

import menuService from "../../services/menu";

export const ACT_FETCH_MENU = 'ACT_FETCH_MENU';

export function actFetchMenu(list) {
  return {
    type: ACT_FETCH_MENU,
    payload: {
      list
    }
  }
}

export function actFetchMenuAsync() {
  return async (dispatch) => {
    try {
      const response = await menuService.getList();
      let hashData = handleHashMenu(response.data);
      dispatch(actFetchMenu(hashData))
    } catch (error) {
      // TODO
    }
  }
}