import { mappingPostData } from "../../helpers";
import postService from "../../services/post";

// Action Type
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST';
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR';
export const ACT_FETCH_ARTICLE_GENERAL = 'ACT_FETCH_ARTICLE_GENERAL';
export const ACT_FETCH_ARTICLE_SEARCH = 'ACT_FETCH_ARTICLE_SEARCH';
export const ACT_FETCH_ARTICLE_DETAIL = 'ACT_FETCH_ARTICLE_DETAIL';
export const ACT_FETCH_ARTICLE_RELATED = 'ACT_FETCH_ARTICLE_RELATED';


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
export function actFetchArticleGeneral({ posts, total, totalPages, currentPage }) {
  return {
    type: ACT_FETCH_ARTICLE_GENERAL,
    payload: {
      posts, total, totalPages, currentPage
    }
  }
}
export function actFetchArticleSearch({ posts, total, totalPages, currentPage }) {
  return {
    type: ACT_FETCH_ARTICLE_SEARCH,
    payload: {
      posts, total, totalPages, currentPage
    }
  }
}
export function actFetchArticleDetail(post) {
  return {
    type: ACT_FETCH_ARTICLE_DETAIL,
    payload: {
      post
    }
  }
}
export function actFetchArticleRelated(posts) {
  return {
    type: ACT_FETCH_ARTICLE_RELATED,
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
      const response = await postService.getArticlePopular()
      const posts = response.data.map(mappingPostData)

      dispatch(actFetchArticlePopular(posts))
    } catch (err) {
      // TODO 
    }
  }
}
export function actFetchArticleGeneralAsync({
  perPage = 2,
  currentPage = 1,
  search = ''
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleGeneral({ search, perPage, currentPage });
      const total = Number(response.headers['x-wp-total']);
      const totalPages = Number(response.headers['x-wp-totalpages']);
      const posts = response.data.map(mappingPostData);

      dispatch(actFetchArticleGeneral({ posts, total, totalPages, currentPage }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actFetchArticleDetailAsync({ slug }) {
  return async (dispatch) => {
    try {
      const response = await postService.getList({ slug });
      const post = response.data.map(mappingPostData);
      dispatch(actFetchArticleDetail(post[0]));
    } catch (err) {
      // TODO
    }
  }
}

export function actFetchArticleRelatedAsync({ categories }) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest({ categories });
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleRelated(posts));
    } catch (err) {
      // TODO
    }
  }
}
