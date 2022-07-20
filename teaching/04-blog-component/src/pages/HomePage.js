import Header from '../components/Header';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';
function HomePage() {
  return (
    <div className="wrapper-content">
      <Header />
      <ArticleLatest />
      <ArticlePopular />
      <ArticleList />
      <div className="spacing" />
      <Footer />
    </div>
  )
}
export default HomePage;