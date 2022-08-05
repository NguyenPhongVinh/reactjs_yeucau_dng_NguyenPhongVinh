import { ACT_GET_LIST_POSTS, ACT_DELETE_LIST_POSTS } from './actions';

const initState = {
  currPage: 0,
  listPosts: []
}

function reducer(state = initState, action) {
  console.log(state);
  switch (action.type) {
    case ACT_GET_LIST_POSTS:
      return {
        ...state,
        currPage: action.payload.currPage,
        listPosts: [
          ...state.listPosts,
          ...action.payload.post
        ]
      }
    case ACT_DELETE_LIST_POSTS:
      return {
        ...state,
        currPage: 0,
        listPosts: []
      }
    default:
      return state
  }
}

export default reducer