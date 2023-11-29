import List from "../components/List";
import Nav from "../components/Nav";
import myLife from "../data/myLife";
import "./Blog.scss";

const Blog = () => {
  return (
    <section className="blogPage">
      <Nav />

      <List lifeElements={myLife} />
    </section>
  );
};
export default Blog;
