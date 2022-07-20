// import logo from './logo.svg';
import Course from './components/Course';
import LifeCycel from './components/LifeCycel';
import './App.css';

function App() {
  const items = [
    {
      name: 'ReactJS',
      description: 'ReactJS là gì',
      time: '60p',
      free: true,
    },
    {
      name: 'Angular',
      description: 'Angular là gì',
      time: '30p',
      free: false,
    },
    {
      name: 'NodeJS',
      description: 'NodeJS là gì',
      time: '20p',
      free: true
    },
  ];

  // let listItems = [];
  // items.forEach((item, index) =>
  //   listItems = [...listItems, <Course key={index} name={item.name} time={item.time} free={item.free}>{item.description}</Course>]
  // );

  const listItems = items.map((item, index) =>  
    <Course key={index} name={item.name} time={item.time} free={item.free}>{item.description}</Course>
  )
  return (
    
    <div className="row">
      {/* {listItems} */}
      <LifeCycel />
    </div>
  );
}

export default App;
