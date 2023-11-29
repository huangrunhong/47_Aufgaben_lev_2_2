import { Link } from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  return (
    <nav>
      <h1>My Life</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </nav>
  );
};
export default Nav;
