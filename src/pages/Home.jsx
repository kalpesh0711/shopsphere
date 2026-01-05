import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import QuickPeek from "../components/QuickPeek";
import CompareBar from "../components/CompareBar";

const Home = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [previewProduct, setPreviewProduct] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.find(p => p.id === product.id);

      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }

      if (prev.length === 2) {
        alert("You can compare only 2 products");
        return prev;
      }

      return [...prev, product];
    });
  };

  if (loading) return <h3>Loading products...</h3>;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewellery</option>
      </select>

      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={(p) => {
            setPreviewProduct(p);
            setIsPreviewOpen(true);
          }}
          onCompare={toggleCompare}
          onAddToCart={addToCart}
        />
      ))}

      {isPreviewOpen && (
        <QuickPeek
          product={previewProduct}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}

      <CompareBar items={compareList} />
    </div>
  );
};

export default Home;
