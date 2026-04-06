'use client';

import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../lib/imageFallbacks';

const Section = styled.section`
  background: #ececec;
  padding: 1rem 2rem 2.4rem;
`;

const Layout = styled.div`
  max-width: 920px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #c8d4cc;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 260px;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`;

const Panel = styled.div`
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const CenterPanel = styled(Panel)`
  position: relative;
`;

const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.22);
`;

const YTPlayBtn = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;
  z-index: 2;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.32);

  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }

  svg {
    width: 26px;
    height: 26px;
    margin-left: 4px;
  }
`;

export default function PhotoGallery() {
  return (
    <Section id="gallery">
      <Layout>
        <Panel>
          <img
            src={withImageFallback('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=80', 0)}
            alt="Ocean resort"
            loading="lazy"
            onError={(event) => handleImageError(event, 0)}
          />
        </Panel>

        <CenterPanel>
          <img
            src={withImageFallback('https://images.unsplash.com/photo-1494526585095-c41746248156?w=1000&q=80', 1)}
            alt="Travel highlight"
            loading="lazy"
            onError={(event) => handleImageError(event, 1)}
          />
          <DarkOverlay />
          <YTPlayBtn href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </YTPlayBtn>
        </CenterPanel>

        <Panel>
          <img
            src={withImageFallback('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1000&q=80', 2)}
            alt="Island destination"
            loading="lazy"
            onError={(event) => handleImageError(event, 2)}
          />
        </Panel>
      </Layout>
    </Section>
  );
}
