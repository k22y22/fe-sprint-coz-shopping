import React from "react";
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
import DataFetcher from "../api/DataFetcher";


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
  const renderItems = (items) => (
    <ItemWrapper>
      {items.slice(0, 4).map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ItemWrapper>
  );

  return (
    <Wrapper>
      <ListSection>
        <ListTitle>상품리스트</ListTitle>
        <DataFetcher render={renderItems} />
      </ListSection>
      <ListSection>
        <ListTitle>북마크 리스트</ListTitle>
        <div>북마크한 상품이 들어올 곳</div>
      </ListSection>
    </Wrapper>
  );
}

export default Main;