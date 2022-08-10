import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actGetListPostsAsync } from './store/actions';

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.listPosts)

  useEffect(() => {
    dispatch(actGetListPostsAsync({
      pageSize: 2,
      currentPage: 2
    }))
  }, [dispatch])

  return (
    <div className="App">

      <div className="container py-5">
        {/* <button onClick={handleClick}>Goi API lay du lieu ve</button> */}
        <div className="row">

          {
            posts.map(postItem => {
              return (
                <div className="col-3" key={postItem.PID}>
                  <div className="card">
                    <img src={postItem.profilepicture} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{postItem.fullname}</h5>
                      <p className="card-text">{postItem.post_content}</p>
                      <a href={`/post/` + postItem.PID} className="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>

    </div>
  );
}

export default App;
