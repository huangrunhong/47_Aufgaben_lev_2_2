import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import myLife from "../data/myLife";

import "./DetailsPage.scss";

const DetailsPage = () => {
  const params = useParams();

  const blog = myLife.find((item) => item.id === Number(params.id));

  return (
    <>
      <Nav />
      <section className="detailspage">
        <div className="detailImage">
          <img src={blog.image} alt="" />
        </div>
        <article>
          <div>
            <h3>{blog.title}</h3>
            <h4>{blog.time}</h4>
          </div>
          <p>{blog.description}</p>
          <h5>By{blog.author} </h5>
        </article>
      </section>
    </>
  );
};
export default DetailsPage;
