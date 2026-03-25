import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import QuickPeek from "../components/QuickPeek";
import CompareBar from "../components/CompareBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [previewProduct, setPreviewProduct] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const toggleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p._id === product._id);

      if (exists) return prev.filter((p) => p._id !== product._id);
      if (prev.length === 2) {
        alert("You can compare only 2 products");
        return prev;
      }
      return [...prev, product];
    });
  };

  if (loading) return <h3 style={{ padding: "20px" }}>Loading products...</h3>;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = (product.title || "").toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
     (product.category || "").toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search Section */}
      <div className="search-section">
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
         <option value="Men">Men</option>
         <option value="Women">Women</option>
         <option value="Electronics">Electronics</option>
         <option value="Jewellery">Jewellery</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(p) => {
              setPreviewProduct(p);
              setIsPreviewOpen(true);
            }}
            onCompare={toggleCompare}
          />
        ))}
      </div>

      {/* Quick View Modal */}
      {isPreviewOpen && (
        <QuickPeek
          product={previewProduct}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}

      {/* Compare Bar */}
      <CompareBar items={compareList} />
    </div>
  );
};

export default Home;
