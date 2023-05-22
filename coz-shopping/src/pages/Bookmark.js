import React, { useState } from "react";
import Filtering from "../components/Filtering";
import ItemFetcher from "../api/ItemFetcher";


function Bookmark() {

  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  const FILTERS = {
    all: () => true,
    product: (item) => item.type === 'Product',
    category: (item) => item.type === 'Category',
    exhibition: (item) => item.type === 'Exhibition',
    brand: (item) => item.type === 'Brand',
  };

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setFilteredItems(items.filter(FILTERS[filter]));
  };

  const filters = [
  { name: '전체', icon: 'img/all.png', filter: 'all' },
  { name: '상품', icon: 'img/product.png', filter: 'product' },
  { name: '카테고리', icon: 'img/category.png', filter: 'category' },
  { name: '기획전', icon: 'img/exhibition.png', filter: 'exhibition' },
  { name: '브랜드', icon: 'img/brand.png', filter: 'brand' },
  ];
  
  return (
        <div>
          <Filtering
            filters={filters}
            selectedFilter={selectedFilter}
            handleFilterSelection={handleFilterSelection}
          />
        </div>
  );
};

export default Bookmark;