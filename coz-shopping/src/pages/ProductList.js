import React, { useState } from "react";
import styled from 'styled-components';
import ItemCard from "../components/ItemCard";
import Filtering from "../components/Filtering";
import ItemFetcher from "../api/ItemFetcher";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px 80px;
`;

function ProductList() {
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
    <ItemFetcher
      render={(items) => (
        <div>
          <Filtering
            filters={filters}
            selectedFilter={selectedFilter}
            handleFilterSelection={handleFilterSelection}
          />
          <ItemWrapper>      
            {items.filter(FILTERS[selectedFilter]).map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ItemWrapper>
        </div>
      )}
    />
  );
}

export default ProductList;