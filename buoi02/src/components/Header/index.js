import './header.css';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderMenus from './HeaderMenus';
import { useSelector, useDispatch } from "react-redux";
import {addTodo} from "../../redux/actions/todo"
function Header() {
  const dispatch = useDispatch();
  const {active} = useSelector((state) => state.todo);
  return (
    <>
    <button onClick={ () => dispatch(addTodo(!active))}>do it</button>
      <header id="header">
        { active ? 'true' : 'false' }
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenus />
        </div>
      </div>
      </header>
      </>
  );
}
export default Header;