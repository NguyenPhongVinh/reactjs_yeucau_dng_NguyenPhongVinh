import ArticleItem from '../ArticleItem';
import MainTitle from '../MainTitle';
import LoadMore from '../LoadMore';

function index() {
  const articleItem = [1, 2, 3, 4, 5, 6].map((item, index) => <ArticleItem key={index} classWrap="tcl-col-12 tcl-col-md-6" classArticle="style-card" />);
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle title="News List" type="News" />
        <div className="tcl-row">
          {articleItem}
        </div>
        <LoadMore />
      </div>
    </div>
  )
}
export default index;