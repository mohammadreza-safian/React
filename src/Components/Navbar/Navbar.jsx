import styled from "./Navbar.module.css";
import {Link} from "react-router-dom";
function Navbar(props) {
  return (
    <div className={styled.headerWrraper}>
      <div className="container">
        <div className={styled.header}>
          <h4>{props.title}</h4>
          <ul>
            <li><Link to='/'>All Articles</Link></li>
            <li><Link to='/create-article' >New Article</Link></li>
            <li><Link to='/about'>About Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
