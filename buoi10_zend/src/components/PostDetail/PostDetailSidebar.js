import PostDetailAuthor from "./PostDetailAuthor"
import PostDetailRelatedPosts from "./PostDetailRelatedPosts"

function PostDetailSidebar({author, authorId}) {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor author={author} authorId={authorId} />
      <div className="spacing" />
      <PostDetailRelatedPosts />
    </div>
  )
}

export default PostDetailSidebar