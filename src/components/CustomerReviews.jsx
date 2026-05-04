'use client';

import styled from 'styled-components';
import { useInView } from '../lib/useInView';

const enterT = (delay = 0) => `
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${delay}s;
`;
const exitT = `
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition-delay: 0s;
`;

const Section = styled.section`
  background: #f5f5f5;
  padding: 3rem 2rem 3.5rem;
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateX(0)' : 'translateX(-28px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  padding-left: 0.75rem;
  border-left: 3px solid #c9a227;
  line-height: 1.2;
`;

const TrustBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: #1a1a1a;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  white-space: nowrap;
`;

const TrustStar = styled.span`
  color: #00b67a;
  font-size: 0.75rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 860px) { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.4rem 1.2rem 1.1rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  border: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(28px)')};
  ${({ $inView, $delay }) => ($inView ? enterT($delay || 0) : exitT)}
`;

const QuoteIcon = styled.div`
  font-size: 2.2rem;
  color: #c9a227;
  line-height: 0.75;
  font-family: Georgia, serif;
  opacity: 0.7;
`;

const ReviewText = styled.p`
  font-size: 0.76rem;
  color: #444;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

const ReviewerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding-top: 0.8rem;
  border-top: 1px solid #f0f0f0;
`;

const Avatar = styled.div`
  width: 36px; height: 36px;
  border-radius: 50%;
  background: #1B6B3A;
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 800;
  flex-shrink: 0;
`;

const ReviewerInfo = styled.div`
  flex: 1;
`;

const ReviewerName = styled.div`
  font-size: 0.78rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
`;

const ReviewerSub = styled.div`
  font-size: 0.62rem;
  color: #888;
  margin-top: 0.08rem;
`;

const Stars = styled.div`
  color: #f5a623;
  font-size: 0.72rem;
  letter-spacing: 1px;
`;

const defaultReviews = [
  { initials: 'MA', name: 'Mohammad Ali', sub: 'Verified · Trustpilot Review', stars: 5, text: 'Excellent service from start to finish. The team at Ummah Travel arranged everything perfectly for our family Umrah trip. Flights, hotels near Haram, and ground transport were all top quality. Very professional and responsive to all our needs. Highly recommend!' },
  { initials: 'FK', name: 'Fatima Khan', sub: 'Verified · Trustpilot Review', stars: 5, text: 'I have used Ummah Travel twice now for Umrah and both times the experience has been outstanding. Their attention to detail is second to none. The hotels were exactly as described and the visa process was handled smoothly. Will definitely book again.' },
  { initials: 'AS', name: 'Ahmed Siddiqui', sub: 'Verified · Trustpilot Review', stars: 5, text: 'Booked a group Umrah package through Ummah Travel and couldn\'t be happier. Everything was well organised from the moment we landed. The guide was knowledgeable and the accommodation was very close to the Haram. Great value for money and excellent customer service.' },
];

function buildInitials(name = '') {
  const pieces = String(name).trim().split(/\s+/).filter(Boolean);

  if (pieces.length === 0) {
    return 'NA';
  }

  const first = pieces[0][0] || '';
  const second = (pieces[1] && pieces[1][0]) || '';
  return `${first}${second}`.toUpperCase();
}

function normalizeStars(rawValue) {
  const numeric = Number(rawValue);
  if (!Number.isFinite(numeric)) {
    return 5;
  }

  return Math.max(1, Math.min(5, Math.round(numeric)));
}

function normalizeReviewItem(item) {
  const name = String(item?.name || item?.author || '').trim();
  if (!name) {
    return null;
  }

  const text = String(item?.text || item?.review || item?.quote || '').trim();
  const sub = String(item?.sub || item?.meta || item?.location || '').trim();

  return {
    name,
    initials: String(item?.initials || '').trim().toUpperCase() || buildInitials(name),
    sub: sub || 'Verified Traveler',
    stars: normalizeStars(item?.stars ?? item?.rating),
    text: text || 'Excellent service and smooth journey from start to finish.',
  };
}

export default function CustomerReviews({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const normalizedContentReviews = Array.isArray(data.reviews)
    ? data.reviews.map(normalizeReviewItem).filter(Boolean)
    : [];
  const reviews = normalizedContentReviews.length > 0
    ? normalizedContentReviews
    : defaultReviews.map((review) => normalizeReviewItem(review)).filter(Boolean);

  const title = data.title || 'What Our Travelers Say';
  const trustText = data.trustText || '4.6/5 on Trustpilot';
  const trustStar = data.trustStar || '★';

  const [ref, inView] = useInView();
  return (
    <Section id="reviews" ref={ref}>
      <Inner>
        <SectionHeader $inView={inView}>
          <Title>{title}</Title>
          {trustText ? (
            <TrustBadge><TrustStar>{trustStar}</TrustStar>{trustText}</TrustBadge>
          ) : null}
        </SectionHeader>

        <Grid>
          {reviews.map((r, i) => (
            <Card key={`${r.name}-${i}`} $inView={inView} $delay={i * 0.13}>
              <QuoteIcon>&ldquo;</QuoteIcon>
              <ReviewText>{r.text}</ReviewText>
              <ReviewerRow>
                <Avatar>{r.initials}</Avatar>
                <ReviewerInfo>
                  <ReviewerName>{r.name}</ReviewerName>
                  <ReviewerSub>{r.sub}</ReviewerSub>
                </ReviewerInfo>
                <Stars>{'★'.repeat(r.stars)}</Stars>
              </ReviewerRow>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
