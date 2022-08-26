import { DEFAULT_AVATAR } from '../../constants';
import { Link } from 'react-router-dom'
import './post-author.css'

function PostDetailAuthor({ author, authorId }) {
  const authorLink = '/user/' + authorId;

  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <Link to={authorLink} className="post-author__avatar">
          <img src={author.avatar || DEFAULT_AVATAR} alt={author.nickname} />
        </Link>
      </div>
      <div className="post-author__nickname">
        <Link to={authorLink}>
          {author.nickname}
        </Link>
      </div>
      <p className="post-author__desc">{author.description}</p>
    </div>

  )
}

export default PostDetailAuthor