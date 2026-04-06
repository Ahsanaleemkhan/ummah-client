'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiCalendar, FiUsers } from 'react-icons/fi';
import { MdFlightTakeoff, MdFlightLand, MdSwapHoriz } from 'react-icons/md';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

const Section = styled.section`
  background: #f7f8f5;
  padding: 0 2rem 4rem;
  margin-top: -2.5rem;
  position: relative;
  z-index: 5;

  @media (max-width: 768px) {
    padding: 0 1rem 3rem;
    margin-top: -2rem;
  }
`;

const Card = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 12px 48px rgba(0,0,0,0.1);
  padding: 2rem 2.25rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

/* Trip type tabs */
const TripTabs = styled.div`
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1.5rem;
`;

const TripTab = styled.button`
  padding: 0.45rem 1.15rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  border: 2px solid ${({ $active }) => $active ? '#1B6B3A' : '#eee'};
  background: ${({ $active }) => $active ? '#1B6B3A' : '#fff'};
  color: ${({ $active }) => $active ? '#fff' : '#666'};
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.03em;

  &:hover {
    border-color: #1B6B3A;
  }
`;

/* Search form grid */
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr 1fr 1fr auto;
  gap: 0.75rem;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr auto 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Label = styled.label`
  font-size: 0.65rem;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.9rem;
  background: #f7f8f5;
  border: 2px solid #eee;
  border-radius: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: #1B6B3A;
    box-shadow: 0 0 0 3px rgba(27,107,58,0.08);
  }

  svg {
    color: #1B6B3A;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  input, select {
    border: none;
    background: none;
    font-size: 0.85rem;
    color: #222;
    width: 100%;
    font-family: inherit;
    font-weight: 500;

    &::placeholder {
      color: #bbb;
    }
  }
`;

const SwapBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(27,107,58,0.08);
  border: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1B6B3A;
  font-size: 1.1rem;
  transition: all 0.2s;
  align-self: end;
  margin-bottom: 0.35rem;

  &:hover {
    background: #1B6B3A;
    color: #fff;
    border-color: #1B6B3A;
  }

  @media (max-width: 560px) {
    margin: 0 auto;
    transform: rotate(90deg);
  }
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.7rem 1.5rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.82rem;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all 0.25s;
  align-self: end;
  height: 46px;
  white-space: nowrap;

  &:hover {
    background: #145230;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(27,107,58,0.3);
  }

  svg {
    font-size: 1rem;
  }
`;

export default function FlightSearch() {
  const [tripType, setTripType] = useState('roundtrip');

  return (
    <Section>
      <Card>
        <TripTabs>
          <TripTab $active={tripType === 'roundtrip'} onClick={() => setTripType('roundtrip')}>
            Round Trip
          </TripTab>
          <TripTab $active={tripType === 'oneway'} onClick={() => setTripType('oneway')}>
            One Way
          </TripTab>
          <TripTab $active={tripType === 'multicity'} onClick={() => setTripType('multicity')}>
            Multi-City
          </TripTab>
        </TripTabs>

        <FormGrid>
          <InputGroup>
            <Label>From</Label>
            <InputWrap>
              <MdFlightTakeoff />
              <input type="text" placeholder="Islamabad (ISB)" />
            </InputWrap>
          </InputGroup>

          <SwapBtn aria-label="Swap destinations">
            <HiOutlineSwitchHorizontal />
          </SwapBtn>

          <InputGroup>
            <Label>To</Label>
            <InputWrap>
              <MdFlightLand />
              <input type="text" placeholder="Jeddah (JED)" />
            </InputWrap>
          </InputGroup>

          <InputGroup>
            <Label>Departure</Label>
            <InputWrap>
              <FiCalendar />
              <input type="date" />
            </InputWrap>
          </InputGroup>

          <InputGroup>
            <Label>Passengers</Label>
            <InputWrap>
              <FiUsers />
              <select defaultValue="1">
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4+ Adults</option>
              </select>
            </InputWrap>
          </InputGroup>

          <SearchBtn>
            <FiSearch /> Search
          </SearchBtn>
        </FormGrid>
      </Card>
    </Section>
  );
}
