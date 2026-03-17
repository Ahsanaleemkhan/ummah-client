'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #f5f5f5;
  padding: 3.5rem 2.5rem 5rem; /* extra bottom padding so CTA card doesn't cover images */
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 4rem;
  }
`;

/*
  7-col × 3-row mosaic grid — layout:
  ┌──────┬──────┬──────┬──────┬──────┬─────┬─────┐
  │  1   │  2   │  3   │  4   │  5   │  6  │  7  │  row 1
  │(r1-3)│(r1-3)│      │(r1-3)│(r1-4)│     │     │
  │      │      │  8   │      │      │  9  │ 10  │  row 2
  ├──────┴──────┼──────┼──────┤      ├─────┴─────┤
  │     11      │  12  │  13  │      │    14     │  row 3
  └─────────────┴──────┴──────┴──────┴───────────┘
*/

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1.15fr 0.9fr 1.1fr 0.85fr 0.85fr 0.85fr;
  grid-template-rows: 185px 185px 205px;
  gap: 8px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 160px);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 140px);
  }
`;

const Cell = styled.a`
  display: block;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  grid-column: ${({ $col }) => $col};
  grid-row: ${({ $row }) => $row};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }

  &:hover img {
    transform: scale(1.07);
  }

  @media (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%);
  border-radius: 14px;
  opacity: 0;
  transition: opacity 0.3s;

  ${Cell}:hover & {
    opacity: 1;
  }
`;

const Label = styled.span`
  position: absolute;
  bottom: 11px;
  left: 13px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 0.3s, transform 0.3s;

  ${Cell}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* 14 items with explicit grid placement */
const items = [
  /* 1 — Kaaba: col 1, rows 1–3 */
  {
    label: 'Holy Kaaba',
    col: '1', row: '1 / 4',
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
  },
  /* 2 — Pilgrims: col 2, rows 1–3 */
  {
    label: 'Pilgrims',
    col: '2', row: '1 / 4',
    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80',
  },
  /* 3 — Lantern: col 3, row 1 */
  {
    label: 'Umrah',
    col: '3', row: '1',
    src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&q=80',
  },
  /* 4 — Praying hands: col 4, rows 1–3 */
  {
    label: 'Prayer',
    col: '4', row: '1 / 4',
    src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
  },
  /* 5 — Tall minaret: col 5, rows 1–4 */
  {
    label: 'Minaret',
    col: '5', row: '1 / 4',
    src: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500&q=80',
  },
  /* 6 — Bokeh/candle light: col 6, row 1 */
  {
    label: 'Light',
    col: '6', row: '1',
    src: 'https://picsum.photos/seed/islamiclight/400/300',
  },
  /* 7 — Aerial Kaaba: col 7, row 1 */
  {
    label: 'Makkah',
    col: '7', row: '1',
    src: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=400&q=80',
  },
  /* 8 — Green dome buildings: col 3, row 2 */
  {
    label: 'Madinah',
    col: '3', row: '2',
    src: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=500&q=80',
  },
  /* 9 — Crescent moon + mosque: col 6, row 2 */
  {
    label: 'Crescent',
    col: '6', row: '2',
    src: 'https://picsum.photos/seed/crescent/400/300',
  },
  /* 10 — White tent / Masjid: col 7, row 2 */
  {
    label: 'Masjid',
    col: '7', row: '2',
    src: 'https://picsum.photos/seed/masjid/400/300',
  },
  /* 11 — Kaaba at night wide: cols 1–2, row 3 */
  {
    label: 'Kaaba Night',
    col: '1 / 3', row: '3',
    src: 'https://picsum.photos/seed/kaabanight/800/400',
  },
  /* 12 — Clock tower: col 3, row 3 */
  {
    label: 'Clock Tower',
    col: '3', row: '3',
    src: 'https://picsum.photos/seed/clocktower/400/500',
  },
  /* 13 — Tasbih rosary: col 4, row 3 */
  {
    label: 'Tasbih',
    col: '4', row: '3',
    src: 'https://picsum.photos/seed/tasbih/400/400',
  },
  /* 14 — Istanbul / Turkey mosque: cols 6–8, row 3 */
  {
    label: 'Istanbul',
    col: '6 / 8', row: '3',
    src: 'https://images.unsplash.com/photo-1565878001520-9e4e86f58a7b?w=800&q=80',
  },
];

export default function DestinationGrid() {
  return (
    <Section id="destinations">
      <Grid>
        {items.map((item) => (
          <Cell key={item.label} href="#destinations" $col={item.col} $row={item.row}>
            <img src={item.src} alt={item.label} loading="lazy" />
            <Overlay />
            <Label>{item.label}</Label>
          </Cell>
        ))}
      </Grid>
    </Section>
  );
}
