import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

// Only for Demo
import DemoButtonComp from './demo/DemoButtonComp';
import DemoMainTitle from './demo/DemoMainTitle';
import DemoInput from './demo/DemoInput';

function App() {
  return (
    <div class="wrapper-content">
      <Header />
      
      <DemoButtonComp />
      <DemoMainTitle />
      <DemoInput />

      <HomePage />
      <div class="spacing" />
      <Footer />
    </div>
  );
}

export default App;
