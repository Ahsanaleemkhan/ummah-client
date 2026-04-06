'use client';

import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../lib/imageFallbacks';

const Section = styled.section`
  background: #ececec;
  padding: 1.1rem 0.9rem 3.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 44px;
  gap: 7px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-auto-rows: 52px;
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 56px;
  }
`;

const Cell = styled.a`
  display: block;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  grid-column: span ${({ $w }) => $w || 2};
  grid-row: span ${({ $h }) => $h || 2};

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
    grid-column: span ${({ $mw, $w }) => $mw || Math.min($w || 2, 4)};
    grid-row: span ${({ $mh, $h }) => $mh || $h || 2};
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 55%);
  border-radius: 12px;
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

const items = [
  {
    label: 'Holy Kaaba',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
  },
  {
    label: 'Pilgrims',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80',
  },
  {
    label: 'Umrah',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&q=80',
  },
  {
    label: 'Prayer',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
  },
  {
    label: 'Minaret',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500&q=80',
  },
  {
    label: 'Light',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&q=80',
  },
  {
    label: 'Makkah',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=400&q=80',
  },
  {
    label: 'Madinah',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=500&q=80',
  },
  {
    label: 'Crescent',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1504198458649-3128b932f49b?w=500&q=80',
  },
  {
    label: 'Masjid',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&q=80',
  },
  {
    label: 'Kaaba Night',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1473123430068-5e3e5fcb17c4?w=600&q=80',
  },
  {
    label: 'Clock Tower',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&q=80',
  },
  {
    label: 'Tasbih',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1496619684348-67dfba77c15a?w=600&q=80',
  },
  {
    label: 'Istanbul',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1565878001520-9e4e86f58a7b?w=800&q=80',
  },
  {
    label: 'Courtyard',
    w: 2,
    h: 3,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  },
  {
    label: 'Night City',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
  },
  {
    label: 'Skyline',
    w: 2,
    h: 2,
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80',
  },
  {
    label: 'Sanctuary',
    w: 2,
    h: 3,
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80',
  },
];

export default function DestinationGrid() {
  return (
    <Section id="destinations">
      <Grid>
        {items.map((item, index) => (
          <Cell key={item.label} href="#destinations" $w={item.w} $h={item.h}>
            <img
              src={withImageFallback(item.src, index)}
              alt={item.label}
              loading="lazy"
              onError={(event) => handleImageError(event, index)}
            />
            <Overlay />
            <Label>{item.label}</Label>
          </Cell>
        ))}
      </Grid>
    </Section>
  );
}
