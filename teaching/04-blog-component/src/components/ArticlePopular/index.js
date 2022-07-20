import './popular-news-list.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../MainTitle';

function index() {
  const classWrap = 'popular-news__list--card';
  let classArticle = 'style-card';
  const articleItemLeft = [1, 2].map((item, index) => <ArticleItem key={index} showDesciption="1" showStats="1" showCategory="1" classWrap={classWrap} classArticle={classArticle} />);
  classArticle += ' style-row';
  const articleItemRigth = <ArticleItem showDesciption="1" showStats="1" showCategory="1" classWrap={classWrap} classArticle={classArticle} />;
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <MainTitle title="Popular Articles" type="Popular" />
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {articleItemLeft}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {articleItemRigth}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default index;