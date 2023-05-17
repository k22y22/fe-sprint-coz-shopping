import React from "react";
import styled, { css } from 'styled-components';

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

const Filtering = ({ filters, selectedFilter, handleFilterSelection }) => {
  return (
    <FilterWrapper>
      {filters.map((filter) => (
        <Filter
          key={filter.filter}
          onClick={() => handleFilterSelection(filter.filter)}
          selected={selectedFilter === filter.filter}
        >
          <img src={filter.icon} alt={filter.name} />
          <FilterName>{filter.name}</FilterName>
        </Filter>
      ))}
    </FilterWrapper>
  );
};

export default Filtering;