
export default function ArticleItemAvatar({author_data}) {
  return (
    <div className="article-item__author-image">
      <a aria-label="John Doe" href="/">
        <img src={author_data && author_data.avatar} alt={author_data && author_data.nickname} />
      </a>
    </div>
  )
}