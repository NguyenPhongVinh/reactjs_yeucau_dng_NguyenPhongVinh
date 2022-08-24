import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { actFetchArticleGeneralAsync } from "../store/post/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();
  const queryStr = getQueryStr('q', location);
  console.log('1 ' + queryStr);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('2 ' + queryStr);

    dispatch(actFetchArticleGeneralAsync({ search: queryStr }));
  }, [dispatch, queryStr]);
  const total = useSelector(state => state.Post.articlePaging.total);

  return (
    <div className="articles-list section">
      <div className="tcl-container">

        <MainTitle type="search">{total} kết quả tìm kiếm với từ khóa "{queryStr}"</MainTitle>

        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div>
        </div>

        <div className="text-center">
          <Button type="primary" size="large">Tải thêm</Button>
        </div>
      </div>
    </div>

  )
}

export default SearchPage