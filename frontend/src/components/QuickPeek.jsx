const QuickPeek = ({ product, onClose }) => {
  return (
    <div className="quickpeek-overlay">
      <div className="quickpeek-modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <div className="quickpeek-content">
          <img src={product.image} alt={product.title} />

          <div className="quickpeek-details">
            <h2>{product.title}</h2>
            <h3>₹ {product.price}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPeek;
