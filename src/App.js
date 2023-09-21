import { useState, useEffect } from "react";
import Header from "./components/Home/Header";
import Category from "./components/categories/Category";

import ProductFeed from "./components/Home/ProductFeed";

function App() {
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  useEffect(() => {
    const appUrl = "https://fakestoreapi.com/products";
    fetch(appUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
    if (selectedCategory) {
      const appUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      fetch(appUrl)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [selectedCategory, searchQuery]);
  const filterProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app bg-slate-500 ">
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Category
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <ProductFeed filterProduct={filterProduct} />
    </div>
  );
}

export default App;
