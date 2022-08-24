import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const hashMenuChildren = item => {
  return (
    <li key={item.id}>
      <Link to={item.url}>{item.title}</Link>
      {item.childItems.length > 0 && <ul>{ item.childItems.map(hashMenuChildren)}</ul>}
    </li>
  );
}

function HeaderMainMenu() {
  let list = useSelector(state => state.Menu.list);

  return (
    <ul className="header-nav__lists">
      {
        list.map(hashMenuChildren)
      }
      {/* <li><a href="/">Home</a></li>
      <li>
        <a href="/">Our Team</a>
        <ul>
          <li><a href="/">Our Team 1</a></li>
          <li><a href="/">Our Team 2</a></li>
          <li><a href="/">Our Team 3</a></li>
        </ul>
      </li>
      <li>
        <a href="/">Contact</a>
        <ul>
          <li><a href="/">Contact 1</a></li>
          <li><a href="/">Contact 2</a></li>
          <li>
            <a href="/">Contact 3</a>
            <ul>
              <li><a href="/">Contact 11</a></li>
              <li><a href="/">Contact 12</a></li>
              <li><a href="/">Contact 13</a></li>
            </ul>
          </li>
        </ul>
      </li> */}
    </ul>
  )
}

export default HeaderMainMenu