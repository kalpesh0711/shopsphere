import { useEffect, useRef } from "react";

const CompareBar = ({ items }) => {
  const compareRef = useRef(null);
    useEffect(() => {
    if (items.length >= 2) {
      compareRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [items]);


 
  // Show nothing until 2 products are selected
  if (items.length < 2) return null;

  return (
    <div
      ref={compareRef}
      style={{
        borderTop: "2px solid #ddd",
        marginTop: "20px",
        padding: "15px",
        background: "#fafafa"                              
      }}
    >
      <h3>Compare Products</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        {items.map(item => (
          <div key={item.id} style={{ width: "45%" }}>
            <h4>{item.title}</h4>
            <p><strong>Price:</strong> ₹ {item.price}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Rating:</strong> ⭐ {item.rating?.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareBar;
