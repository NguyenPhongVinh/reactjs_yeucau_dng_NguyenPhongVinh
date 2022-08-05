import api from "./api"

export const PostService = {
 getList(parame){
    return api.get('https://api-meme-zendvn-01.herokuapp.com/api/v2/post/getListPagination.php?pageSize=3', {
        params: parame
    })
 }
}