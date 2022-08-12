import ArticleItem from '../ArticleItem'
import './popular-news-list.css'
import { useDispatch, useSelector } from 'react-redux';
import { actFetchArticlePopularAsync } from '../../store/post/actions';
import { useEffect } from 'react';
import categoryService from '../../services/category';
function ArticlePopular() {
  const dispatch = useDispatch();
  let posts = useSelector(state => state.Post.articlePopular);

  useEffect(() => {
    dispatch(actFetchArticlePopularAsync())
  }, [dispatch]);

  if (!posts.length) return null;

  posts.forEach(element => {
    element.categoryName = [];
    element.categories.forEach(cateId => {
      getCategories(cateId).then( r=> {
        element.categoryName = [...element.categoryName, {
          id: cateId,
          name: r.data.name,
          link: r.data.link,
        }]
      });
    })
  });

  function getCategories(cateId) {
    return categoryService.getById(cateId);
  }

  const postLeft = [posts[0], posts[1]];
  const postRinght = posts[2];

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <a href="/" className="btn btn-default">View More</a>
        </div>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              {
                postLeft.map(post => {
                  return (
                    <div className="popular-news__list--card" key={post.id}>
                      <ArticleItem isStyleCard isShowCategoies isShowDesc post={post} />
                    </div>
                  )
                })
              }
              {/* End Popular news card */}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              {
                <div className="popular-news__list--card">
                  <ArticleItem isStyleCard isStyleRow isShowDesc post={postRinght} />
                </div>
              }
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ArticlePopular