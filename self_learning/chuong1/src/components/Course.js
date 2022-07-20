import Lesson from "./Lesson";
import { useRef } from 'react';
import { useState } from 'react';
  
function Course(props, refs) {
  // const { free, description } = props;
  const [isShow, setShow] = useState(true);
  const [txt, setTxt] = useState('');
  const username = useRef(null);

  function handleClick1() {
    setShow(!isShow);
  }

  function handleClick2(ct) {
    alert(ct)
  }

  function handleClick3() {
    alert(props.name);
  }

  function registerCourses() {
    setTxt(username.current.value);
  }

  function showBtn() {
    if (props.free === true) {
      return <>
        <button type="button" onClick={handleClick1} className="btn btn-warning">View 1</button>
        <button type="button" onClick={() => handleClick2(123)} className="btn btn-danger">View 2</button>
        <button type="button" onClick={handleClick3} className="btn btn-success">View 3</button>
      </>
    } else {
      return (
        <div className="input-group">
          <input ref={username} type="text" className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-info" onClick={registerCourses} type="button">Register to { txt }</button>
          </span>
        </div>
      );
    }
  }
    if (isShow) {
      return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">{props.name}</h3>
          </div>
          <div className="panel-body">
            <p>{props.children} - {props.time}</p>
            <ul className="list-group">
              <Lesson />
              <Lesson />
              <Lesson />
            </ul>
          </div>
          <div className="panel-footer">
            {showBtn()}
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">{props.name}</h3>
            </div>
            <div className="panel-body">
              <p>{props.children} - {props.time}</p>
             
            </div>
            <div className="panel-footer">
              {showBtn()}
            </div>
          </div>
        </div>
      );
    } 
}

export default Course;
