import { ACT_FETCH_MENU } from "./actions";

const intState = {
  list: []
}

function reducer(menuState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_MENU:
      return {
        ...menuState,
        list: action.payload.list
      }
    default:
      return menuState
  }
}

export default reducer;