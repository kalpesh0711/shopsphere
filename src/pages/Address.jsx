import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";



const Address = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
  if (cartItems.length === 0) {
    navigate("/");
   }
  }, [cartItems, navigate]);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    street: ""
  });

  const [errors,setErrors] = useState({}) ;
  const validate = () => {
  const newErrors = {};

  if (!address.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!address.phone.trim()) {
    newErrors.phone = "Phone is required";
  }

  if (!address.city.trim()) {
    newErrors.city = "City is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


const handleContinue = () => {
  const isValid = validate();

  if (!isValid) return;

  localStorage.setItem("address", JSON.stringify(address));
  navigate("/checkout");
};


  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Shipping Address</h2>
      
      <form>
      <label>Full Name</label>
      <input
        type="text"
        placeholder="Full Name"
        value={address.name}
        onChange={(e) =>
          setAddress({ ...address, name: e.target.value })
        }
        style={inputStyle}
      />
      
      {errors.name && (
      <p style={{ color: "red", fontSize: 14 }}>
        {errors.name}
      </p>
      )}  

      <label>Phone Number</label>
      <input
        type="text"
        placeholder="Phone Number"
        value={address.phone}
        onChange={(e) =>
          setAddress({ ...address, phone: e.target.value })
        }
        style={inputStyle}
      />

      {errors.phone && (
      <p style={{ color:"red", fontSize:14}}>
        {errors.phone}
      </p> 
      )}

      <label>City</label>
      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={(e) =>
          setAddress({ ...address, city: e.target.value })
        }
        style={inputStyle}
      />

      {errors.city && (
      <p style={{ color: "red", fontSize: 14 }}>
       {errors.city}
      </p>
      )}

      <label>Street Address</label>
      <textarea
        placeholder="Street Address"
        value={address.street}
        onChange={(e) =>
          setAddress({ ...address, street: e.target.value })
        }
        style={{ ...inputStyle, height: 80 }}
      />
      </form> 
      <button
     onClick={handleContinue}
     disabled={
     !address.name ||
     !address.phone ||
     !address.city
     }
     style={{
     marginTop: 10,
     padding: "8px 14px",
     opacity:
      !address.name ||
      !address.phone ||
      !address.city
        ? 0.5
        : 1
     }}
    >
    Continue
    </button>


      {(address.name || address.phone || address.city || address.street) && (
       <div style={{ marginTop: 20 }}>
        <h3>Entered Address</h3>

        <p><strong>Name:</strong> {address.name}</p>
        <p><strong>Phone:</strong> {address.phone}</p>
        <p><strong>City:</strong> {address.city}</p>
        <p><strong>Street:</strong> {address.street}</p>
       </div>
      )}


    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
  borderRadius: 6,
  border: "1px solid #ccc"
};


export default Address;
