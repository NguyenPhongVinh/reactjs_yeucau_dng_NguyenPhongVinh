import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DemoButtonComp from './demo/DemoButtonComp';
import DemoMainTitleComp from './demo/DemoMainTitleComp';
import Login from './pages/Login/Login';


function App() {
  
  return (
    <div className="wrapper-content">
      {/* <DemoButtonComp /> */}
      {/* <DemoMainTitleComp /> */}
      <Header />
      {/* <HomePage /> */}
      <Login />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
