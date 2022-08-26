import { handleHashTagsById } from "../../helpers";
import tagService from "../../services/tag";

export const ACT_FETCH_ALL_TAGS='ACT_FETCH_ALL_TAGS';

export function actFetchAllTags(hashTagsById) {
  return {
    type: ACT_FETCH_ALL_TAGS,
    payload: {
      hashTagsById
    }
  }
}

export function actFetchAllTagsAsync() {
  return async (dispatch) => {
    try {
      const response = await tagService.getList();
      const tags = response.data;
      const hashTagsById = handleHashTagsById(tags);
      dispatch(actFetchAllTags(hashTagsById))
    } catch (error) {
      // TODO
    }
  }
}