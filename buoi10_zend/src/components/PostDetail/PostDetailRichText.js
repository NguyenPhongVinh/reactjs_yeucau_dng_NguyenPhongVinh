
function PostDetailRichText({content}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content}}></div>
  )
}

export default PostDetailRichText