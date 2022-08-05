import { useDispatch, useSelector } from 'react-redux';
import { actGetListPostsAsync, actDeleteListPosts } from './store/actions'
import Card from './components/card';
function App() {
  const dispatch = useDispatch();
  const { listPosts, currPage } = useSelector((state) => state);

  function handlerClickGet() {
    dispatch(actGetListPostsAsync({
      currPage: currPage + 1
    }));
  }

  function handlerClickClear() {
    dispatch(actDeleteListPosts());
  }

  return <div className="container">
    <div className="p-2">
      <button className="btn btn-sm btn-info" onClick={handlerClickGet}>Get list post</button>
      <button className="btn btn-sm btn-danger m-1" onClick={handlerClickClear}>Clear</button>
    </div>
    <div>
      {listPosts.map((item, index) => <Card key={index} {...item} />)}
    </div>
  </div>;
}

export default App;
