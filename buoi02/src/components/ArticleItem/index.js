import './article-item.css';
import cls from 'classnames';
import Category from './Category';
import Description from './Description';
import Stats from './Stats';
import Title from './Title';
import Info from './Info';

function ArticleItem({ className, type, showCategory, showStats, showDescription, infoProp}) {
  let classes = cls('article-item', {
    'style-card': type === 1,
    'style-card style-row': type === 2,
  }, className)

  return (
    <article className={classes}>
      <div className="article-item__thumbnail">
        <a href="/">
          <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
        </a>
      </div>
      <div className="article-item__content">
        {showCategory && <Category />}
        {showStats && <Stats />}
        <Title />
        {showDescription && <Description /> }
        <Info {...infoProp}/>
      </div>
    </article>
  );
}

export default ArticleItem;