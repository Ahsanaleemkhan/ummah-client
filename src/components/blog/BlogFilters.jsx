'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineFilter } from 'react-icons/hi';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: #f7f8f5;
  padding: 4.5rem 2rem 0;

  @media (max-width: 768px) {
    padding: 3rem 1rem 0;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 2px solid #eee;
  border-radius: 12px;
  padding: 0.6rem 1rem;
  min-width: 280px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: #1B6B3A;
    box-shadow: 0 0 0 3px rgba(27,107,58,0.08);
  }

  @media (max-width: 640px) {
    min-width: unset;
  }
`;

const SearchIcon = styled(FiSearch)`
  color: #aaa;
  font-size: 1rem;
  flex-shrink: 0;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  font-size: 0.85rem;
  color: #222;
  width: 100%;

  &::placeholder {
    color: #bbb;
  }
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const FilterIcon = styled(HiOutlineFilter)`
  color: #888;
  font-size: 1rem;
  margin-right: 0.25rem;
`;

const FilterTag = styled.button`
  padding: 0.4rem 1rem;
  font-size: 0.72rem;
  font-weight: 600;
  border-radius: 999px;
  border: 2px solid ${({ $active }) => $active ? '#1B6B3A' : '#ddd'};
  background: ${({ $active }) => $active ? '#1B6B3A' : '#fff'};
  color: ${({ $active }) => $active ? '#fff' : '#555'};
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.03em;

  &:hover {
    border-color: #1B6B3A;
    color: ${({ $active }) => $active ? '#fff' : '#1B6B3A'};
  }
`;

const categories = ['All', 'Umrah Guide', 'Travel Tips', 'Spirituality', 'Destinations', 'Packing'];

export default function BlogFilters({ activeCategory, onCategoryChange }) {
  return (
    <Section>
      <Inner>
        <TopRow>
          <SearchBox>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search articles..." />
          </SearchBox>

          <FilterRow>
            <FilterIcon />
            {categories.map(cat => (
              <FilterTag
                key={cat}
                $active={activeCategory === cat}
                onClick={() => onCategoryChange(cat)}
              >
                {cat}
              </FilterTag>
            ))}
          </FilterRow>
        </TopRow>
      </Inner>
    </Section>
  );
}
