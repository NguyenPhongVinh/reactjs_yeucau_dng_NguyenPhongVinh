import { ACT_FETCH_ALL_TAGS } from "./actions";

const intState = {
  hashTagsById: {}
}

function reducer(tagState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_TAGS:
      return {
        ...tagState,
        hashTagsById: action.payload.hashTagsById
      }
    default:
      return tagState
  }
}

export default reducer;