import api from './api'

const PostService = {
    getList(params) {
        return api.call().get('/wp/v2/posts', {
            params: {
                ...params,
                lang: 'vi'
            }
        });
    },
    getListArticleLatest(params) {
        return PostService.getList(params);
    }
}

export default PostService;