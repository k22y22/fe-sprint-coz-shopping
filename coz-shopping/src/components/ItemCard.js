import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToBookmark } from '../actions/actions';
import { BsStarFill } from "react-icons/bs";

const Card = styled.div`
  margin: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 320px;
  height: 220px;
  border-radius: 15px;
  object-fit: cover;
`;

const StyledStar = styled(BsStarFill)`
  position: absolute;
  bottom: 12px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: ${props => props.filled ? 'gold' : 'lightgray'};

  &:hover {
    color: gold;
    cursor: pointer;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemInfoRight = styled.div`
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
  const dispatch = useDispatch();
  const [filled, setFilled] = useState(false);


  const handleClick = (e, item) => {
    e.preventDefault();
    dispatch(addToBookmark(item));
    setFilled(!filled);
    console.log('북마크 추가됨:', item.title, item.brand_name );
  };

  return (
    <Card>
      {item.type === 'Product' && (
        <>
        <ImageWrapper>
          <Image src={item.image_url} alt={item.title} />
          <StyledStar filled={filled} onClick={(e) => handleClick(e, item)} />
        </ImageWrapper>
        <ItemInfo>
          <>
            <ItemInfoLeft>
              <Title>{item.title}</Title>
            </ItemInfoLeft>
            <ItemInfoRight>
              <Discount>{item.discountPercentage}%</Discount>
              <Price>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
            </ItemInfoRight>
          </>
        </ItemInfo>
        </>
      )}

      {item.type === 'Category' && (
        <>
        <ImageWrapper>
          <Image src={item.image_url} alt={item.title} />
          <StyledStar filled={filled} onClick={(e) => handleClick(e, item)} />
        </ImageWrapper>
        <ItemInfo>
          <>
            <ItemInfoLeft>
              <Title>#{item.title}</Title>
            </ItemInfoLeft>
          </>
        </ItemInfo>
        </>
      )}

      {item.type === 'Exhibition' && (
        <>
        <ImageWrapper>
          <Image src={item.image_url} alt={item.title} />
          <StyledStar filled={filled} onClick={(e) => handleClick(e, item)} />
        </ImageWrapper>
        <ItemInfo>
          <>
            <ItemInfoLeft>
              <Title>{item.title}</Title>
              <p>{item.sub_title}</p>
            </ItemInfoLeft>
          </>
        </ItemInfo>
        </>
      )}

      {item.type === 'Brand' && (
        <>
        <ImageWrapper>
          <Image src={item.brand_image_url} alt={item.title} />
          <StyledStar filled={filled} onClick={(e) => handleClick(e, item)} />
        </ImageWrapper>
        <ItemInfo>
          <>
            <ItemInfoLeft>
              <Title>{item.brand_name}</Title>
            </ItemInfoLeft>
            <ItemInfoRight>
              <P>관심고객수</P>
              <Follwer>{item.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Follwer>
            </ItemInfoRight>
          </>
        </ItemInfo>
        </>
      )}
    </Card>
  );
}

export default ItemCard;