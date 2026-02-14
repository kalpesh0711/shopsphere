import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product, onQuickView, onCompare }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="product-title">
        {product.title}
      </div>

      <div className="product-price">
        ₹ {product.price}
      </div>

      <div className="product-buttons">
        <button
          className="quick-btn"
          onClick={() => onQuickView(product)}
        >
          Quick View
        </button>

        <button
          className="compare-btn"
          onClick={() => onCompare(product)}
        >
          Compare
        </button>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
