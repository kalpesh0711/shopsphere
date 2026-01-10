import { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    street: ""
  });

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

      <input
        type="text"
        placeholder="Phone Number"
        value={address.phone}
        onChange={(e) =>
          setAddress({ ...address, phone: e.target.value })
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={(e) =>
          setAddress({ ...address, city: e.target.value })
        }
        style={inputStyle}
      />

      <textarea
        placeholder="Street Address"
        value={address.street}
        onChange={(e) =>
          setAddress({ ...address, street: e.target.value })
        }
        style={{ ...inputStyle, height: 80 }}
      />
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
