// import { Link } from 'react-router-dom';

export default function ArticleItemThumb({featured_media_url}) {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        <img src={featured_media_url} alt={featured_media_url} />
      </a>
    </div>
  )
}