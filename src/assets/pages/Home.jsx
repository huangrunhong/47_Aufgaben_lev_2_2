import Button from "../components/Button";
import Nav from "../components/Nav";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homePage">
      <div className="upperPart">
        <Nav />
      </div>
      <div className="lowerPart">
        <div>
          <h2>Welcome to my simple Blog</h2>
          <Link to="/blog">
            <Button name={"Go to articles"} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
