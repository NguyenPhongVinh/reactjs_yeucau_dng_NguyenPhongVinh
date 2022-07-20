import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../MainTitle';

function index() {
  const articleItem = [1, 2, 3].map((item, index) => <ArticleItem key={index} classWrap="latest-news__card" />);
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle title="Latest Articles" type="Latest" />
        <div className="latest-news__list spacing">
          {articleItem}
        </div>
      </div>
    </div>
  )
}
export default index;