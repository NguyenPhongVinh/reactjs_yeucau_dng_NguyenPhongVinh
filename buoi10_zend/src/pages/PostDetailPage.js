
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { actFetchArticleDetailAsync } from "../store/post/actions"

function PostDetailPage() {
  const params = useParams()
  const dispatch = useDispatch();
  const articleDetail = useSelector(state => state.Post.articleDetail);
  console.log(articleDetail);
  useEffect(() => {
    dispatch(actFetchArticleDetailAsync(params));
  }, [dispatch, params]);

  if (!articleDetail) return null;
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead title={articleDetail.title} author={articleDetail.author} viewCount={articleDetail.viewCount} createdDate={articleDetail.createdDate} />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent thumbnail={articleDetail.thumbnail} content={articleDetail.content}/>

            <PostDetailSidebar {...articleDetail} />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage