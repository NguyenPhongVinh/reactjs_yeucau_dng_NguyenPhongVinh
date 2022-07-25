import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import './popular-news-list.css';

function ArticlePopular() {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnProps={{
          as: 'a',
          type: 'default',
          href: '/'
        }} btnLabel="View More" className="btn btn-default">Popular Articles</MainTitle>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem showCategory={true} showStats={true} showDescription={true} type={1} infoProp={{
                  authorImage: true
                }} />
              </div>
              {/* End Popular news card */}
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem showCategory={true} showStats={true} showDescription={true} type={1} infoProp={{
                  authorImage: true
                }} />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem showCategory={true} showStats={true} showDescription={true} type={2} infoProp={{
                  authorImage: true
                }} />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;