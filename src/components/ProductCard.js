import { Link } from "react-router-dom";
import "../scss/Categories.scss";

const ProductCard = (props) => {
  return (
    <div className="product_card_child_grid">
      <h2>{props.category}</h2>
      <img src={props.img} alt={props.category} />

      <Link to={`/item/${props.id}`} state={props.products}>
        Details
      </Link>
    </div>
  );
};

export default ProductCard;
