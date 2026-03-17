'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #000;
  position: relative;
  overflow: hidden;
`;

/* Two-panel layout: collage left + youtube centre */
const Layout = styled.div`
  display: flex;
  min-height: 420px;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

/* Left collage — 4 images in a 2×2 grid */
const Collage = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const CollageImg = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(0.85);
    transition: filter 0.3s, transform 0.4s;
  }

  &:hover img {
    filter: brightness(1);
    transform: scale(1.06);
  }
`;

/* Centre YouTube panel */
const YouTubePanel = styled.div`
  flex: 0 0 420px;
  position: relative;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex: 0 0 320px;
  }

  @media (max-width: 768px) {
    flex: none;
    height: 260px;
  }
`;

const YTBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
`;

const YTContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
`;

const YTPlayBtn = styled.a`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);

  &:hover {
    transform: scale(1.1);
    background: #cc0000;
  }

  svg {
    width: 28px;
    height: 28px;
    margin-left: 4px;
  }
`;

const YTLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

/* Right collage — mirror of left */
const RightCollage = styled(Collage)``;

const collageLeft = [
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&q=75',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=75',
  'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&q=75',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=75',
];

const collageRight = [
  'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500&q=75',
  'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&q=75',
  'https://images.unsplash.com/photo-1565878001520-9e4e86f58a7b?w=500&q=75',
  'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=500&q=75',
];

export default function PhotoGallery() {
  return (
    <Section id="gallery">
      <Layout>
        {/* Left photo collage */}
        <Collage>
          {collageLeft.map((src, i) => (
            <CollageImg key={i}>
              <img src={src} alt={`Travel destination ${i + 1}`} loading="lazy" />
            </CollageImg>
          ))}
        </Collage>

        {/* Centre — YouTube CTA */}
        <YouTubePanel>
          <YTBg
            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=70"
            alt="Watch our journey"
          />
          <YTContent>
            <YTPlayBtn
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
            >
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </YTPlayBtn>
            <YTLabel>Watch Our Journey</YTLabel>
          </YTContent>
        </YouTubePanel>

        {/* Right photo collage */}
        <RightCollage>
          {collageRight.map((src, i) => (
            <CollageImg key={i}>
              <img src={src} alt={`Travel destination ${i + 5}`} loading="lazy" />
            </CollageImg>
          ))}
        </RightCollage>
      </Layout>
    </Section>
  );
}
