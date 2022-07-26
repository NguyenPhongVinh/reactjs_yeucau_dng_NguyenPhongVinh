import { mappingPostData } from "../../helpers";
import postService from "../../services/post";

// Action Type
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST';
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR';
export const ACT_FETCH_ARTICLE_NEWS = 'ACT_FETCH_ARTICLE_NEWS';


// Action
export function actFetchArticleLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLE_LATEST,
    payload: {
      posts
    }
  }
}

export function actFetchArticlePopular(posts) {
  return {
    type: ACT_FETCH_ARTICLE_POPULAR,
    payload: {
      posts
    }
  }
}

export function actFetchArticleNews(posts) {
  return {
    type: ACT_FETCH_ARTICLE_NEWS,
    payload: {
      posts
    }
  }
}


// Action Async
export function actFetchArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleLatest(posts));
    } catch (err) {
      // TODO
    }
  }
}

export function actFetchArticlePopularAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticlePopular();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticlePopular(posts));
    } catch (err) {
      // TODO
    }
  }
}
export function actFetchArticleNewsAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleNews();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleNews(posts));
    } catch (err) {
      // TODO
    }
  }
}