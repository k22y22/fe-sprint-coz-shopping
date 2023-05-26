import React, { useState } from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToBookmark, removeFromBookmark } from '../actions/actions';


const StyledStar = styled(BsStarFill)`
  position: absolute;
  bottom: 12px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: ${(props) => (props.filled ? 'gold' : 'lightgray')};

  &:hover {
    color: gold;
    cursor: pointer;
  }
`;

const BookmarkIcon = () => {
  const dispatch = useDispatch();
  const [filled, setFilled] = useState(false);

  const handleClick = (e, item) => {
    e.preventDefault();
    if (filled) {
    // 북마크가 이미 되어 있는 경우 북마크 제거 액션 디스패치
    dispatch(removeFromBookmark(item));
  } else {
    // 북마크가 되어 있지 않은 경우 북마크 추가 액션 디스패치
    dispatch(addToBookmark(item));
  }
  setFilled(!filled);
  };

  return <StyledStar filled={filled} onClick={handleClick} />;
};

export default BookmarkIcon;