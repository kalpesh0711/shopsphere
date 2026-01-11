import { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    street: ""
  });

  const [errors,setErrors] = useState({}) ;
  const validate = () => {
    const newErrors ={};

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

  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Shipping Address</h2>

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


      <textarea
        placeholder="Street Address"
        value={address.street}
        onChange={(e) =>
          setAddress({ ...address, street: e.target.value })
        }
        style={{ ...inputStyle, height: 80 }}
      />

      <button
       onClick={validate}
       style={{
        marginTop: 10,
        padding: "8px 14px"
       } }
      >
       continue

      </button>

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
