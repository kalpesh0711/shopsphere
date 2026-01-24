const QuickPeek = ({ product, onClose }) => {
  // If no product is selected, render nothing
  if (!product) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "320px",
        height: "100%",
        backgroundColor: "#fff",
        borderLeft: "1px solid #ddd",
        padding: "20px",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <button onClick={onClose}>Close</button>

      <img
        src={product.image}
        alt={product.title}
        width="120"
        style={{ marginTop: "10px" }}
      />

      <h3>{product.title}</h3>
      <p><b>Price:</b> ₹ {product.price}</p>
      <p><b>Category:</b> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default QuickPeek;
