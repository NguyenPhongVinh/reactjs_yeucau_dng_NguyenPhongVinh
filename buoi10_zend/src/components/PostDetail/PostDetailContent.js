import './post-detail.css'
import PostDetailComments from "./PostDetailComments"
import PostDetailRichText from "./PostDetailRichText"
import PostDetailTags from "./PostDetailTags"

function PostDetailContent({ thumbnail, content, tagsId }) {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={thumbnail} alt="blog-title" />
      </div>
      <div className="content-padding">
        <PostDetailRichText content={content} />

        <PostDetailTags tagsId={tagsId} />

        <PostDetailComments />
      </div>
    </div>
  )
}

export default PostDetailContent