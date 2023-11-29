import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

const List = (props) => (
  <article className="blogList">
    {props.lifeElements.map((element) => (
      <Item key={uuidv4} {...element} />
    ))}
  </article>
);

export default List;
