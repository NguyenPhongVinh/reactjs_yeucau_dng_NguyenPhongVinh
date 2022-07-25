import './latest-news-list.css';

import MainTitle from '../shared/MainTitle';
import ArticleItem from '../ArticleItem';

function ArticleLatest() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
      <MainTitle>Latest Articles</MainTitle>

        <div className="latest-news__list spacing">
          <div className="latest-news__card">
            <ArticleItem infoProp={{
              authorImage: true
            }}/>
          </div>

          <div className="latest-news__card">
            <ArticleItem infoProp={{
              authorImage: true
            }}/>
          </div>

          <div className="latest-news__card">
            <ArticleItem infoProp={{
              authorImage: true
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;