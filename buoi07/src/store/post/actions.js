import PostService from "../../services/post";

export const GET_LIST_ARTICLE_LATEST = 'GET_LIST_ARTICLE_LATEST';

export function actGetListArticleLatest(post) {
    return {
        type: GET_LIST_ARTICLE_LATEST,
        payload: {
            post
        }
    }
}

export function actGetListArticleLatestAsync(params) {
    return async function (dispatch) {
        try {
            const response = await PostService.getListArticleLatest(params);
            if (response.status === 200) {
                let post = response.data;
                // mapPost => tạo cái hàm anfyh trong helper chỉ lấy ra các key càn dùng
                dispatch(actGetListArticleLatest(post));
            }
        } catch (error) {
            console.log(error)
        }
    }
}