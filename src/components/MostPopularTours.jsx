'use client';

import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../lib/imageFallbacks';
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
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateX(0)' : 'translateX(-28px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
`;

const TitleBlock = styled.div``;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.3rem;
  padding-left: 0.75rem;
  border-left: 3px solid #c9a227;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 0.76rem;
  color: #777;
  margin: 0;
  padding-left: 0.75rem;
`;

const ViewAll = styled.a`
  font-size: 0.76rem;
  font-weight: 600;
  color: #1B6B3A;
  text-decoration: none;
  white-space: nowrap;
  margin-top: 0.25rem;
  &:hover { text-decoration: underline; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const CardWrap = styled.div`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(32px)')};
  ${({ $inView, $delay }) => ($inView ? enterT($delay || 0) : exitT)}
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.13); transform: translateY(-3px); }
`;

const ImageWrap = styled.div`
  position: relative;
  height: 155px;
  overflow: hidden;
  img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.4s;
  }
  ${Card}:hover & img { transform: scale(1.05); }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20,50,30,0.75) 0%, transparent 55%);
`;

const BadgesRow = styled.div`
  position: absolute;
  top: 8px; left: 8px; right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CategoryBadge = styled.span`
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: ${({ $bg }) => $bg || '#1B6B3A'};
  color: ${({ $color }) => $color || '#fff'};
`;

const DaysBadge = styled.span`
  font-size: 0.58rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  backdrop-filter: blur(4px);
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 8px; left: 10px;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  &::before { content: '📍'; font-size: 0.6rem; }
`;

const CardBody = styled.div`
  padding: 0.85rem 0.9rem 0.9rem;
`;

const CardTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.2rem;
`;

const CardMeta = styled.div`
  font-size: 0.65rem;
  color: #888;
  margin-bottom: 0.35rem;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.5rem;
`;

const Stars = styled.span`
  color: #f5a623;
  font-size: 0.72rem;
  letter-spacing: 1px;
`;

const RatingNum = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  color: #555;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-top: 0.6rem;
  border-top: 1px solid #f0f0f0;
`;

const Price = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  color: #1B6B3A;
`;

const BtnRow = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const BookBtn = styled.a`
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.32rem 0.7rem;
  border-radius: 5px;
  background: #1B6B3A;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
  &:hover { background: #145c30; }
`;

const DetailsBtn = styled.a`
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.32rem 0.7rem;
  border-radius: 5px;
  border: 1.5px solid #ddd;
  color: #555;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  white-space: nowrap;
  &:hover { border-color: #1B6B3A; color: #1B6B3A; }
`;

const defaultTours = [
  { id: 'T1', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', category: 'Umrah',         categoryBg: '#c9a227', categoryColor: '#fff', days: '7 Days', caption: 'Makkah & Madinah', title: 'Makkah & Madinah', meta: '7 Days Package · All Inclusive', rating: '4.9', price: '$300',  href: '/umrah-packages' },
  { id: 'T2', img: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=80', category: 'Ziyarah',       categoryBg: '#0e7490', categoryColor: '#fff', days: '5 Days', caption: 'Madinah Heritage', title: 'Madinah Heritage Tour', meta: 'Quba · Uhud · Qiblatain', rating: '4.9', price: '$480', href: '/tours' },
  { id: 'T3', img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80', category: 'Family',          categoryBg: '#d97706', categoryColor: '#fff', days: '6 Days', caption: 'Jeddah + Makkah',  title: 'Family Umrah Support Plan', meta: 'Flexible pacing · Family rooms', rating: '4.9', price: '$555', href: '/tours' },
  { id: 'T4', img: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=80', category: 'Ramadan',      categoryBg: '#7c3aed', categoryColor: '#fff', days: '10 Days', caption: 'Ramadan Program', title: 'Ramadan Umrah Retreat', meta: 'Iftar support · Guided rituals', rating: '5.0', price: '$750', href: '/umrah-packages' },
];

export default function MostPopularTours({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const tours = Array.isArray(data.tours) && data.tours.length > 0 ? data.tours : defaultTours;
  const [ref, inView] = useInView();

  return (
    <Section id="tours" ref={ref}>
      <Inner>
        <SectionHeader $inView={inView}>
          <TitleBlock>
            <Title>{data.title || 'Most Popular Tours'}</Title>
            <Subtitle>{data.subtitle || 'Pilgrimage-focused journeys with guided support'}</Subtitle>
          </TitleBlock>
          <ViewAll href="/tours">View All Tours →</ViewAll>
        </SectionHeader>

        <Grid>
          {tours.map((tour, i) => (
            <CardWrap key={tour.id || i} $inView={inView} $delay={i * 0.1}>
              <Card>
                <ImageWrap>
                  <img src={withImageFallback(tour.img, i)} alt={tour.title} loading="lazy" onError={(e) => handleImageError(e, i)} />
                  <ImageOverlay />
                  <BadgesRow>
                    <CategoryBadge $bg={tour.categoryBg} $color={tour.categoryColor}>{tour.category}</CategoryBadge>
                    <DaysBadge>● {tour.days}</DaysBadge>
                  </BadgesRow>
                  <ImageCaption>{tour.caption}</ImageCaption>
                </ImageWrap>
                <CardBody>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardMeta>{tour.meta}</CardMeta>
                  <RatingRow>
                    <Stars>★★★★★</Stars>
                    <RatingNum>({tour.rating})</RatingNum>
                  </RatingRow>
                  <CardFooter>
                    <Price>{tour.price}</Price>
                    <BtnRow>
                      <BookBtn href={tour.href || '/tours'}>Book Now →</BookBtn>
                      <DetailsBtn href={tour.href || '/tours'}>Details</DetailsBtn>
                    </BtnRow>
                  </CardFooter>
                </CardBody>
              </Card>
            </CardWrap>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
