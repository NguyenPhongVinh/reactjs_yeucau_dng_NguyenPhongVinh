import './main-title.css';
import ButtonViewMore from '../Shared/Button/ButtonViewMore.js';

function index(props) {
  return (
    <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
      <h2>{props.title}</h2>
      <ButtonViewMore type={props.type} />
    </div>
  )
}
export default index;