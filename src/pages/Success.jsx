import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for shopping with ShopSphere.</p>

      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Success;
