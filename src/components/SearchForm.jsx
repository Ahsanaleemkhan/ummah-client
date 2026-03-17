'use client';

import { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
`;

const FormRow = styled.form`
  display: flex;
  align-items: stretch;
  background: #fff;
  border-radius: 60px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  border: 1px solid #e8e8e8;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 20px;
    gap: 0;
  }
`;

const Field = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  min-width: 0;

  &:not(:last-child) {
    border-right: 1px solid #eee;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid #eee;
    }
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.25rem;
  }
`;

const FieldWithSwap = styled.div`
  display: flex;
  align-items: stretch;
  flex: 2.2;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SwapIcon = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  font-size: 0.75rem;
  color: #1B6B3A;
  transition: all 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);

  &:hover {
    background: #e8f5e9;
    border-color: #1B6B3A;
    transform: translate(-50%, -50%) rotate(180deg);
  }

  @media (max-width: 768px) {
    left: auto;
    right: 20px;
    top: 50%;
  }
`;

const FieldLabel = styled.span`
  font-size: 0.62rem;
  font-weight: 600;
  color: #1B6B3A;
  text-transform: capitalize;
  letter-spacing: 0.02em;
  margin-bottom: 1px;
`;

const FieldInput = styled.input`
  border: none;
  background: none;
  color: #222;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0;
  width: 100%;
  outline: none;

  &::placeholder {
    color: #999;
    font-weight: 400;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0 1.6rem;
  background: #1B6B3A;
  color: #fff;
  border: none;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
  min-height: 100%;
  border-radius: 0 60px 60px 0;

  &:hover {
    background: #145230;
  }

  @media (max-width: 768px) {
    border-radius: 0 0 20px 20px;
    padding: 1rem;
    justify-content: center;
  }
`;

const SearchIcon = styled.span`
  font-size: 0.9rem;
`;

const fieldConfigs = {
  flight: [
    { key: 'from', label: '', placeholder: 'From', group: 'swap' },
    { key: 'to', label: '', placeholder: 'To', group: 'swap' },
    { key: 'depart', label: 'Depart', placeholder: 'Sun, 3 Dec 2026', type: 'text' },
    { key: 'return', label: '', placeholder: 'Return', type: 'text' },
  ],
  hotels: [
    { key: 'location', label: '', placeholder: 'Location', group: 'single' },
    { key: 'checkin', label: 'Check-in', placeholder: 'Select Date', type: 'text' },
    { key: 'checkout', label: 'Check-out', placeholder: 'Select Date', type: 'text' },
    { key: 'guests', label: 'Guests', placeholder: '2 Adults', type: 'text' },
  ],
  umrah: [
    { key: 'from', label: '', placeholder: 'Departing From', group: 'single' },
    { key: 'date', label: 'Travel Date', placeholder: 'Select Date', type: 'text' },
    { key: 'package', label: 'Package', placeholder: 'Economy', type: 'text' },
    { key: 'travelers', label: 'Travelers', placeholder: '1', type: 'text' },
  ],
  tour: [
    { key: 'destination', label: '', placeholder: 'Where to?', group: 'single' },
    { key: 'date', label: 'Travel Date', placeholder: 'Select Date', type: 'text' },
    { key: 'duration', label: 'Duration', placeholder: 'Days', type: 'text' },
    { key: 'travelers', label: 'Travelers', placeholder: '1', type: 'text' },
  ],
};

export default function SearchForm({ activeTab }) {
  const fields = fieldConfigs[activeTab] || fieldConfigs.flight;
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSwap = () => {
    setFormData(prev => ({ ...prev, from: prev.to || '', to: prev.from || '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Separate swap fields from regular fields
  const swapFields = fields.filter(f => f.group === 'swap');
  const regularFields = fields.filter(f => f.group !== 'swap');

  return (
    <FormWrapper>
      <FormRow onSubmit={handleSubmit}>
        {swapFields.length === 2 ? (
          <FieldWithSwap>
            <Field>
              {swapFields[0].label && <FieldLabel>{swapFields[0].label}</FieldLabel>}
              <FieldInput
                placeholder={swapFields[0].placeholder}
                value={formData[swapFields[0].key] || ''}
                onChange={(e) => handleChange(swapFields[0].key, e.target.value)}
              />
            </Field>
            <SwapIcon type="button" onClick={handleSwap} aria-label="Swap">↔</SwapIcon>
            <Field>
              {swapFields[1].label && <FieldLabel>{swapFields[1].label}</FieldLabel>}
              <FieldInput
                placeholder={swapFields[1].placeholder}
                value={formData[swapFields[1].key] || ''}
                onChange={(e) => handleChange(swapFields[1].key, e.target.value)}
              />
            </Field>
          </FieldWithSwap>
        ) : null}

        {regularFields.map(field => (
          <Field key={field.key}>
            {field.label && <FieldLabel>{field.label}</FieldLabel>}
            <FieldInput
              type={field.type || 'text'}
              placeholder={field.placeholder}
              value={formData[field.key] || ''}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </Field>
        ))}

        <SearchButton type="submit">
          <SearchIcon>🔍</SearchIcon>
          Search...
        </SearchButton>
      </FormRow>
    </FormWrapper>
  );
}
