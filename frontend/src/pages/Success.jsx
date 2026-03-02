import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const orderPlaced = localStorage.getItem("orderPlaced");

    if (!orderPlaced) {
      navigate("/");
    }

    localStorage.removeItem("orderPlaced");
  }, [navigate]);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for shopping with us.</p>

      <button
        onClick={() => navigate("/")}
        style={{ marginTop: 20 }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Success;
