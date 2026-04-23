'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #fff;
  padding: 4.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #1B6B3A;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.92rem;
  color: #777;
`;

const TableWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
  border-radius: 20px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.07);

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1B6B3A40;
    border-radius: 3px;
  }
`;

const Table = styled.table`
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background: linear-gradient(135deg, #1B6B3A, #238c4e);
`;

const Th = styled.th`
  padding: 1.15rem 1.25rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  text-align: ${({ $align }) => $align || 'center'};
  letter-spacing: 0.04em;
  white-space: nowrap;

  &:first-child {
    text-align: left;
    padding-left: 1.75rem;
  }
`;

const Tr = styled.tr`
  transition: background 0.2s;

  &:nth-child(even) {
    background: #f9faf7;
  }

  &:hover {
    background: rgba(27,107,58,0.04);
  }
`;

const Td = styled.td`
  padding: 1rem 1.25rem;
  font-size: 0.82rem;
  color: #444;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;

  &:first-child {
    text-align: left;
    font-weight: 600;
    color: #222;
    padding-left: 1.75rem;
  }
`;

const Check = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ $yes }) => $yes ? 'rgba(27,107,58,0.12)' : 'rgba(200,30,30,0.08)'};
  color: ${({ $yes }) => $yes ? '#1B6B3A' : '#c81e1e'};
  font-size: 0.7rem;
  font-weight: 700;
`;

const HighlightTd = styled(Td)`
  font-weight: 700;
  color: #1B6B3A;
  font-size: 0.88rem;
`;

const rows = [
  { feature: 'Duration', budget: '7–10 Nights', economy: '14 Nights', premium: '21–28 Nights' },
  { feature: 'Hotel Rating', budget: '3-Star', economy: '4-Star', premium: '5-Star' },
  { feature: 'Distance from Haram', budget: '800m – 1.2km', economy: '200–500m', premium: '50m (Haram View)' },
  { feature: 'Meals', budget: 'Bed & Breakfast', economy: 'Breakfast', premium: 'All Inclusive' },
  { feature: 'Flights', budget: 'Indirect', economy: 'Direct', premium: 'Direct (Business opt.)' },
  { feature: 'Transport', budget: 'Group Bus', economy: 'Group Transport', premium: 'Private Vehicle' },
  { feature: 'Visa Processing', budget: true, economy: true, premium: true },
  { feature: 'Ziyarat Tours', budget: false, economy: true, premium: true },
  { feature: 'Dedicated Guide', budget: false, economy: false, premium: true },
  { feature: '24/7 Support', budget: true, economy: true, premium: true },
  { feature: 'Travel Insurance', budget: false, economy: false, premium: true },
  { feature: 'Laundry Service', budget: false, economy: false, premium: true },
];

function CellContent({ value }) {
  if (typeof value === 'boolean') {
    return <Check $yes={value}>{value ? '✓' : '✕'}</Check>;
  }
  return value;
}

export default function PackageCompare() {
  return (
    <Section id="compare">
      <SectionHeader>
        <Title>Compare Packages</Title>
        <Subtitle>Find the perfect package that suits your needs and budget</Subtitle>
      </SectionHeader>

      <TableWrapper>
        <Table>
          <Thead>
            <tr>
              <Th $align="left">Feature</Th>
              <Th>Budget</Th>
              <Th>Economy</Th>
              <Th>Premium</Th>
            </tr>
          </Thead>
          <tbody>
            {rows.map((row) => (
              <Tr key={row.feature}>
                <Td>{row.feature}</Td>
                <Td><CellContent value={row.budget} /></Td>
                <Td><CellContent value={row.economy} /></Td>
                <Td><CellContent value={row.premium} /></Td>
              </Tr>
            ))}
            <Tr>
              <Td style={{ fontWeight: 700, color: '#1a1a2e' }}>Starting Price</Td>
              <HighlightTd>$340</HighlightTd>
              <HighlightTd>$650</HighlightTd>
              <HighlightTd>$1,350</HighlightTd>
            </Tr>
          </tbody>
        </Table>
      </TableWrapper>
    </Section>
  );
}
