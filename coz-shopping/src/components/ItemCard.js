import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  width: 320px;
  height: 220px;
  border-radius: 15px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemInfo_left = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemInfo_right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 650;
`;

const Discount = styled.p`
  font-size: 18px;
  font-weight: 650;
  color: rgba(69, 44, 221, 1);
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 650;
`

const Follwer = styled.p`
  color: black;
  font-weight: 500;
`;

function ItemCard({ item }) {
  return (
    <Card>
      {item.type === 'Product' && (
        <>
        <Image src={item.image_url} alt={item.title} />
        <ItemInfo>
          <>
            <ItemInfo_left>
              <Title>{item.title}</Title>
            </ItemInfo_left>
            <ItemInfo_right>
              <Discount>{item.discountPercentage}%</Discount>
              <Price>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
            </ItemInfo_right>
          </>
        </ItemInfo>
        </>
      )}

      {item.type === 'Category' && (
        <>
        <Image src={item.image_url} alt={item.title} />
        <ItemInfo>
          <>
            <ItemInfo_left>
              <Title>#{item.title}</Title>
            </ItemInfo_left>
          </>
        </ItemInfo>
        </>
      )}

      {item.type === 'Exhibition' && (
        <>
        <Image src={item.image_url} alt={item.title} />
        <ItemInfo>
          <>
            <ItemInfo_left>
              <Title>{item.title}</Title>
              <p>{item.sub_title}</p>
            </ItemInfo_left>
          </>
        </ItemInfo>
        </>
      )}

      {item.type === 'Brand' && (
        <>
        <Image src={item.brand_image_url} alt={item.brand_name} />
        <ItemInfo>
          <>
            <ItemInfo_left>
              <Title>{item.brand_name}</Title>
            </ItemInfo_left>
            <ItemInfo_right>
              <P>관심고객수</P>
              <Follwer>{item.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Follwer>
            </ItemInfo_right>
          </>
        </ItemInfo>
        </>
      )}
    </Card>
  );
}

export default ItemCard;