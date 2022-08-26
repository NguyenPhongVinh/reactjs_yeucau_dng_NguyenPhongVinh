import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

function PostDetailTags({ tagsId }) {
  const hashTagsById = useSelector(state => state.Tag.hashTagsById);
  return (
    <div className="post-detail__tags">
      <h2>Tags</h2>
      <ul>
        {
          tagsId.map(tagId => {
            const tag = hashTagsById[tagId];

            if (!tag) {
              return null
            }

            const tagSlugLink = '/tag/' + tag.slug;

            return <li className="item" key={tagId}><Link className="btn btn-default" to={tagSlugLink}>{tag.name}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

export default PostDetailTags