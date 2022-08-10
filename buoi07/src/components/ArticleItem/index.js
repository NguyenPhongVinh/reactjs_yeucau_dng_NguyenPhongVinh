import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  ...props
}) {

  // ở trên chỉ item chứu ko ..props
  // if !item return null
  // conts titel = item.title
  // Popular Articles chổ nút NEWS NEWS màu tím thì lấy từ trường catelogy [1,2,3] rồi lấy ra query tiếp. rồi bỏ name dô
  // tải thêm bài viết tổng hợp. nhớ thêm số orderBy = post_vews (lượt xem) => tăng pge thì gọi api tăng thêm số page_site
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  return (
    <article className={classes}>
      <ArticleItemThumb {...props} />
      <div className="article-item__content">

        {isShowCategoies && <ArticleItemCategories  {...props} />}
        {isShowCategoies && <ArticleItemStats  {...props} />}

        <ArticleItemTitle  {...props} />

        {isShowDesc && <ArticleItemDesc {...props} />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} {...props} />
      </div>
    </article>
  )
}