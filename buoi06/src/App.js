import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <div className="wrapper-content">
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/post/:slug">
            <PostDetail />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
