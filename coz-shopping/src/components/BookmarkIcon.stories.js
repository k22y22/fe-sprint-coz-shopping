import React, { useState } from 'react';
import BookmarkIcon from './BookmarkIcon';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';

export default {
  title: 'Atoms/BookmarkIcon',
  component: BookmarkIcon,
};

const Template = () => {
  const [filled, setFilled] = useState(false);

  const handleClick = () => {
    setFilled(!filled);
  };

  return <BookmarkIcon filled={filled} onClick={handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  filled: false,
};