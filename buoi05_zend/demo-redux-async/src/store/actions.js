import { PostService } from '../services/posts'

// Action Types
export const ACT_GET_LIST_POSTS = 'ACT_GET_LIST_POSTS'

// Action Creator
export function actGetListPosts(posts) {
  return {
    type: ACT_GET_LIST_POSTS,
    payload: {
      posts
    }
  }
}

// export function actGetListPostsAsync() {
//   return dispatch => {
//     console.log('truoc khi goi api');

//     axios.get('https://api-meme-zendvn-01.herokuapp.com/api/v2/post/getListPagination.php?pageSize=3&currPage=1')
//       .then(function (response) {
//         console.log(response);
//         if (response.data.status === 200) {
//           dispatch(actGetListPosts(response.data.posts));
//         }
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   }
// }

// Action Async
// export function actGetListPostsAsync({
//   pageSize,
//   currentPage
// }) {
//   return dispatch => {
//     PostService.getList({
//       pageSize,
//       currentPage
//     }).then((response) => {
//       if (response.data.status === 200) {
//         const posts = response.data.posts
//         dispatch(actGetListPosts(posts))
//       }
//     })
//   }
// }

export function actGetListPostsAsync({
  pageSize,
  currentPage
}) {
  return async function (dispatch) {
    try {
      const response = await PostService.getList({
        pageSize,
        currentPage
      });
      
      if (response.data.status === 200) {
        const posts = response.data.posts
        dispatch(actGetListPosts(posts))
      }
      // Error
    } catch(err) {
      // Error
    }
  }
}