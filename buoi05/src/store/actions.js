import { PostService } from '../service/posts';
export const ACT_GET_LIST_POSTS = 'ACT_GET_LIST_POSTS';
export const ACT_DELETE_LIST_POSTS = 'ACT_DELETE_LIST_POSTS';

export function actGetListPosts(post, currPage) {
	return {
		type: ACT_GET_LIST_POSTS,
		payload: {
			post, currPage
		}
	}
}
export function actDeleteListPosts() {
	return {
		type: ACT_DELETE_LIST_POSTS,
		payload: {}
	}
}

export function actGetListPostsAsync(parame) {
	return async dispatch => {
		const response = await PostService.getList(parame);
		const { currPage } = parame;
		dispatch(actGetListPosts(response.data.posts, currPage));
	}
}
