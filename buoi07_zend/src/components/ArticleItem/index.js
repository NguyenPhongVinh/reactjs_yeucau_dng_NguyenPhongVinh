import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/esm/plugin/relativeTime';
export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  if (!post) return null;
  dayjs.extend(relativeTime);

  const title = post.title;
  const thumbnail = post.thumbnail;
  const author = post.author;
  const createdDate = dayjs(post.createdDate).format('DD/MM/YYYY');
  const createdDateFromNow = dayjs(post.createdDate).fromNow();
  const slug = post.slug;
  const authorId = post.authorId;
  const categoryName = post.categoryName;
  console.log(categoryName);
  const slugLink = '/post/' + slug;
  const authorLink = '/user/' + authorId;


  return (
    <article className={classes}>
      <ArticleItemThumb thumbnail={thumbnail} slugLink={slugLink} title={title} />
      <div className="article-item__content">

        {isShowCategoies && <ArticleItemCategories />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle title={title} slugLink={slugLink} />

        {isShowDesc && <ArticleItemDesc />}

        <ArticleItemInfo
          author={author}
          createdDate={createdDate}
          createdDateFromNow={createdDateFromNow}
          authorLink={authorLink}
          isShowAvatar={isShowAvatar} />
      </div>
    </article>
  )
}