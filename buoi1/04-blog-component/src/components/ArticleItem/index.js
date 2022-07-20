import './article-item.css';
import Category from './Category';
import Description from './Description';
import Stats from './Stats';
import Title from './Title';
import Info from './Info';
function index(props) {
  const _Description = props.showDescription ? <Description /> : '';
  const _Category = props.showCategory ? <Category /> : '';
  const _Stats = props.showStats ? <Stats /> : '';
  const classArticle = props.classArticle ?? '';
  const classWrap = props.classWrap ?? '';
  // function handelShowDescription() {
  //   if (props.showDescription) {
  //     return <Description />;
  //   }
  // }

  // function handelShowCategory() {
  //   if (props.showCategory) {
  //     return <Category />;
  //   }
  // }

  // function handelShowStats() {
  //   if (props.showStats) {
  //     return <Stats />;
  //   }
  // }

  return (
    <div className={classWrap}>
      <article className={`article-item ${classArticle}`}>
        <div className="article-item__thumbnail">
          <a href="/">
            <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
          </a>
        </div>
        <div className="article-item__content">
          {_Category}
          {_Stats}
          <Title />
          {_Description}
          <Info />
        </div>
      </article>
    </div>
  )
}
export default index;