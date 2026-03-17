'use client';

import styled from 'styled-components';

/*
  Section has NO top padding.
  The card uses a true negative margin-top (-80px = half its height)
  so it physically protrudes 80px ABOVE the section boundary into
  the DestinationGrid section above.
*/
const Section = styled.section`
  background: #d6e4d6;
  padding: 1rem 2rem 0;
  position: relative;
  z-index: 3;          /* sit above DestinationGrid so card is visible */
  overflow: visible;
`;

/* White card — sharp corners, half-protruding above the section */
const Card = styled.div`
  max-width: 1060px;
  margin: -50px auto 0;  /* true negative: card top is 80px above section top */
  background: #ffffff;
  border-radius: 0;       /* sharp edges */
  box-shadow: 0 8px 36px rgba(0,0,0,0.14);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  min-height: 160px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: -50px auto 0;
    min-height: auto;
  }
`;

/* Text on the left — pinned to top */
const TextSide = styled.div`
  flex-shrink: 0;
  padding: 2rem 2.5rem;
  align-self: flex-start;
`;

const HeadingNormal = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: #1B6B3A;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 1.15rem;
  }
`;

const HeadingBold = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  color: #1B6B3A;
  line-height: 1.15;

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;

/* Mosque fills the right side and is pinned to the bottom */
const MosqueSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;   /* mosque sits at bottom of card */
  height: 160px;
  overflow: hidden;

  svg {
    height: 100%;
    width: auto;
    display: block;
  }

  @media (max-width: 768px) {
    justify-content: center;
    height: 110px;
    width: 100%;
  }
`;

function MosqueSVG() {
  return (
    <svg viewBox="0 0 580 160" fill="#1B6B3A" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
      {/* Ground */}
      <rect x="0" y="152" width="580" height="8" />

      {/* Far-left minaret */}
      <rect x="18" y="55" width="13" height="97" />
      <rect x="14" y="51" width="21" height="7" rx="1" />
      <polygon points="24,36 18,51 30,51" />
      <circle cx="24" cy="34" r="3.5" />

      {/* Left dome + walls */}
      <rect x="48" y="110" width="62" height="42" />
      <ellipse cx="79" cy="110" rx="31" ry="28" />
      {/* Left minaret 2 */}
      <rect x="46" y="72" width="10" height="80" />
      <rect x="43" y="68" width="16" height="6" rx="1" />
      <polygon points="51,54 46,68 56,68" />

      {/* Second-left dome */}
      <rect x="124" y="118" width="58" height="34" />
      <ellipse cx="153" cy="118" rx="29" ry="24" />
      <rect x="122" y="70" width="10" height="82" />
      <rect x="119" y="66" width="16" height="6" rx="1" />
      <polygon points="127,52 122,66 132,66" />

      {/* Central main minaret — tallest */}
      <rect x="270" y="4" width="16" height="148" />
      <rect x="265" y="0" width="26" height="8" rx="2" />
      {/* Crescent at top */}
      <path d="M278 -4 Q287 2 287 10 Q280 6 273 10 Q272 2 278 -4Z" />

      {/* Central large dome */}
      <ellipse cx="278" cy="152" rx="78" ry="64" />
      <rect x="200" y="112" width="156" height="40" />
      {/* Arched windows */}
      <path d="M222 152 L222 130 Q231 120 240 130 L240 152 Z" fill="#d6e4d6" />
      <path d="M258 152 L258 130 Q267 120 276 130 L276 152 Z" fill="#d6e4d6" />
      <path d="M294 152 L294 130 Q303 120 312 130 L312 152 Z" fill="#d6e4d6" />

      {/* Second-right dome */}
      <rect x="396" y="118" width="58" height="34" />
      <ellipse cx="425" cy="118" rx="29" ry="24" />
      <rect x="448" y="70" width="10" height="82" />
      <rect x="445" y="66" width="16" height="6" rx="1" />
      <polygon points="453,52 448,66 458,66" />

      {/* Right dome + walls */}
      <rect x="470" y="110" width="62" height="42" />
      <ellipse cx="501" cy="110" rx="31" ry="28" />
      {/* Right minaret 2 */}
      <rect x="524" y="72" width="10" height="80" />
      <rect x="521" y="68" width="16" height="6" rx="1" />
      <polygon points="529,54 524,68 534,68" />

      {/* Far-right minaret */}
      <rect x="549" y="55" width="13" height="97" />
      <rect x="545" y="51" width="21" height="7" rx="1" />
      <polygon points="555,36 549,51 561,51" />
      <circle cx="555" cy="34" r="3.5" />
    </svg>
  );
}

export default function JourneyBeginsCTA() {
  return (
    <Section id="start-journey">
      <Card>
        <TextSide>
          <HeadingNormal>Your Umrah Journey</HeadingNormal>
          <HeadingBold>Begins Here</HeadingBold>
        </TextSide>
        <MosqueSide>
          <MosqueSVG />
        </MosqueSide>
      </Card>
    </Section>
  );
}
