const ProductCard = ({ product, onQuickView, onCompare }) => {

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <img src={product.image} alt={product.title} width="80" />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>

      <button onClick={() => onQuickView(product)}>
       Quick View 
      </button>

       <button onClick={() => onCompare(product)}>
        Compare
      </button>
    </div>
  );
};

export default ProductCard;
