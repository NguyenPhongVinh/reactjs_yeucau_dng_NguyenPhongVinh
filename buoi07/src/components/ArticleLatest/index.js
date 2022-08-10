import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actGetListArticleLatestAsync } from '../../store/post/actions';

function ArticleLatest() {
  const dispatch = useDispatch();
  const listArticleItem = useSelector((state) => state.Post.articleLatest);

  useEffect(() => {
    dispatch(actGetListArticleLatestAsync({
      per_page: 3,
      page: 1
    }))
  }, [dispatch]);

  return (
    <div className="latest-news section">
      <div className="tcl-container">

        <MainTitle />

        <div className="latest-news__list spacing">
          {listArticleItem.map(item => <div key={item.id} className="latest-news__card">
            <ArticleItem {...item} />
          </div>)}
        </div>
      </div>
    </div>

  )
}

export default ArticleLatest