import axios from "axios";

const API = "http://localhost:5000/api/cart";

const getToken = () => localStorage.getItem("token");

export const getCart = async () => {
  return axios.get(API, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });                  
};

export const addToCart = async (productId) => {
  return axios.post(
    `${API}/add`,
    { productId },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
};

export const updateCart = async (productId, quantity) => {
  return axios.put(
    `${API}/update`,
    { productId, quantity },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
};

export const removeFromCart = async (productId) => {
  return axios.delete(`${API}/remove/${productId}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};