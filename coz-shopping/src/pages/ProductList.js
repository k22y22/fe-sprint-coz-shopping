import React, { useState, useEffect } from "react";
import styled, { css }from 'styled-components';
import ItemCard from "../components/ItemCard";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = styled.div`
  height: 115px;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      color: rgba(65, 45, 212, 1);
      border-bottom: 3px solid rgba(65, 45, 212, 1);
    `}

  :hover {
    color: rgba(65, 45, 212, 1);
    border-bottom: 3px solid rgba(65, 45, 212, 1);
  }
`;

const FilterName = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
`;

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

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'all') {
      setFilteredItems(items);
    } else if (filter === 'product') {
      setFilteredItems(items.filter((item) => item.type === 'Product'));
    } else if (filter === 'category') {
      setFilteredItems(items.filter((item) => item.type === 'Category'));
    } else if (filter === 'exhibition') {
      setFilteredItems(items.filter((item) => item.type === 'Exhibition'));
    } else if (filter === 'brand') {
      setFilteredItems(items.filter((item) => item.type === 'Brand'));
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://cozshopping.codestates-seb.link/api/v1/products');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div>
      <FilterWrapper>
        <Filter onClick={() => handleFilterSelection('all')} selected={selectedFilter === 'all'}>
          <img src="img/all.png"></img>
          <FilterName>전체</FilterName>
        </Filter>
        <Filter onClick={() => handleFilterSelection('product')} selected={selectedFilter === 'product'}>
          <img src="img/product.png"></img>
          <FilterName>상품</FilterName>
        </Filter>
        <Filter onClick={() => handleFilterSelection('category')} selected={selectedFilter === 'category'}>
          <img src="img/category.png"></img>
          <FilterName>카테고리</FilterName>
        </Filter>
        <Filter onClick={() => handleFilterSelection('exhibition')} selected={selectedFilter === 'exhibition'}>
          <img src="img/exhibition.png"></img>
          <FilterName>기획전</FilterName>
        </Filter>
        <Filter onClick={() => handleFilterSelection('brand')} selected={selectedFilter === 'brand'}>
          <img src="img/brand.png"></img>
          <FilterName>브랜드</FilterName>
        </Filter>
      </FilterWrapper>

      <ItemWrapper>      
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ItemWrapper>
    </div>
  );
}

export default ProductList;