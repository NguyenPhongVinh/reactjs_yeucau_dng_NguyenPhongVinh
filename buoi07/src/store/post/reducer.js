import { GET_LIST_ARTICLE_LATEST } from "./actions"
const intState = {
  articleLatest: []
}

function reducer(postState = intState, action) {
  switch (action.type) {
    case GET_LIST_ARTICLE_LATEST:
      return {
        articleLatest: action.payload.post
      }
    default:
      return postState;
  }
}

export default reducer;