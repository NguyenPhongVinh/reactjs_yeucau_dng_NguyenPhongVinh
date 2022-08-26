import ArticleRelated from "../ArticleItem/ArticleRelated"
import { useSelector } from "react-redux"

function PostDetailRelatedPosts() {
  const relatedPosts = useSelector(state => state.Post.articleRelated);
  if (!relatedPosts.length) return null;

  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {
        relatedPosts.map(post => {
          return (
            <ArticleRelated key={post.id} post={post} />
          )
        })
      }
    </div>
  )
}

export default PostDetailRelatedPosts