import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'

function ArticleLatest() {
  return (
    <div class="latest-news section">
			<div class="tcl-container">

				<MainTitle />

        <div class="latest-news__list spacing">

          <div class="latest-news__card">
            <ArticleItem />
          </div>

          <div class="latest-news__card">
            <ArticleItem />
          </div>

          <div class="latest-news__card">
            <ArticleItem />
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default ArticleLatest