import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, productImage, price } = props.data;

  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <button
          type="button"
          className="btn btn-primary position-relative"
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Add To Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          type="button"
          className={
            "btn btn-outline-primary position-relative " +
            (favoriteIds && "text-danger")
          }
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <h5 className="card-title">
          <Link to={`/product/${id}`} className="btn btn-link">
            {productName}
          </Link>
        </h5>
      </div>
    </div>
  );
};

// export default Product;
