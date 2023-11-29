import Button from "./Button";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <Link to={`/blog/detail/${props.id}`}>
        <Button name={"Read more"} />
      </Link>
    </div>
  );
};
export default Item;
