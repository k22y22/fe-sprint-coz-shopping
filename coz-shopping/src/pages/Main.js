import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ListTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function Main() {
  const [items, setItems] = useState([]);

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
    <Wrapper>
      <ListSection>
        <ListTitle>상품리스트</ListTitle>
        <ItemWrapper>
          {items.slice(0, 4).map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ItemWrapper>
      </ListSection>
      <ListSection>
        <ListTitle>북마크 리스트</ListTitle>
        <div>북마크한 상품이 들어올 곳</div>
      </ListSection>
    </Wrapper>
  );
}

export default Main;