import React, { useState } from "react";
import { SearchBar } from "./SearchBar";

const products = [
  "Apple iPhone",
  "Samsung Galaxy",
  "Google Pixel",
  "OnePlus Nord",
  "Sony Xperia",
];

export function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => <li key={i}>{product}</li>)
        ) : (
          <li>No products found.</li>
        )}
      </ul>
    </div>
  );
}
