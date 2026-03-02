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
        borderTop: "2px solid #ddddddea",
        marginTop: "20px",
        padding: "15px",
        background: "#fafafaec"                              
      }}
    >
      <h3>Compare Products</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        {items.map(item => (
          <div key={item.id} style={{ width: "45%" }}>
            <h4>{item.title}</h4>
            <p><b>Price:</b> ₹ {item.price}</p>
            <p><b>Category:</b> {item.category}</p>
            <p><b>Rating:</b> ⭐ {item.rating?.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareBar;
