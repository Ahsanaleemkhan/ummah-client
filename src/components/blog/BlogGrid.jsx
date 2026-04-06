'use client';

import styled, { keyframes } from 'styled-components';
import { FiClock, FiUser, FiArrowRight, FiCalendar } from 'react-icons/fi';
import { HiOutlineBookmarkAlt } from 'react-icons/hi';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: #f7f8f5;
  padding: 2.5rem 2rem 4.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem 3rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

/* Featured post */
const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0;
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 6px 32px rgba(0,0,0,0.07);
  margin-bottom: 2.5rem;
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeUp} 0.5s ease forwards;

  &:hover {
    box-shadow: 0 12px 48px rgba(27,107,58,0.12);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImg = styled.div`
  height: 340px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  ${FeaturedCard}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`;

const FeaturedBody = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.7rem;
  background: rgba(27,107,58,0.08);
  color: #1B6B3A;
  font-size: 0.65rem;
  font-weight: 700;
  border-radius: 999px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
  width: fit-content;
`;

const FeaturedTitle = styled.h2`
  font-size: 1.45rem;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.3;
  margin-bottom: 0.65rem;

  @media (max-width: 640px) {
    font-size: 1.15rem;
  }
`;

const FeaturedExcerpt = styled.p`
  font-size: 0.85rem;
  color: #777;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  color: #999;

  svg {
    font-size: 0.82rem;
    color: #bbb;
  }
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1B6B3A;
  text-decoration: none;
  cursor: pointer;
  transition: gap 0.2s;

  &:hover {
    gap: 0.7rem;
  }

  svg {
    font-size: 0.85rem;
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

/* Blog grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 3px 18px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;

  &:hover {
    box-shadow: 0 10px 40px rgba(27,107,58,0.1);
    transform: translateY(-5px);
  }
`;

const CardImg = styled.div`
  width: 100%;
  height: 190px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  ${Card}:hover & img {
    transform: scale(1.07);
  }
`;

const ReadTimeBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  backdrop-filter: blur(6px);

  svg {
    font-size: 0.7rem;
  }
`;

const CardBody = styled.div`
  padding: 1.25rem 1.3rem 1.4rem;
`;

const CardCategory = styled(CategoryBadge)`
  margin-bottom: 0.65rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.35;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardExcerpt = styled.p`
  font-size: 0.78rem;
  color: #888;
  line-height: 1.65;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.85rem;
  border-top: 1px solid #f0f0f0;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AuthorAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #1B6B3A;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const AuthorName = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: #333;
`;

const DateInfo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.68rem;
  color: #aaa;

  svg {
    font-size: 0.75rem;
  }
`;

/* ── Data ── */
const featuredPost = {
  img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
  category: 'Umrah Guide',
  title: 'The Ultimate First-Timer\'s Guide to Umrah 2026',
  excerpt: 'Everything you need to know before your first Umrah — from visa requirements and packing essentials to step-by-step rituals at the Haram. This comprehensive guide covers preparation, Ihram rules, Tawaf, Sa\'i, and spiritual tips to maximize your sacred experience.',
  author: 'Ahmad Malik',
  initials: 'AM',
  date: 'Mar 28, 2026',
  readTime: '12 min read',
};

const posts = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80',
    category: 'Travel Tips',
    title: '10 Essential Packing Tips for Your Umrah Journey',
    excerpt: 'Pack smarter with our curated checklist covering clothing, health essentials, electronics, and spiritual items.',
    author: 'Fatima Hassan',
    initials: 'FH',
    date: 'Mar 22, 2026',
    readTime: '6 min',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=80',
    category: 'Destinations',
    title: 'Exploring Madinah: Sacred Sites Beyond Masjid an-Nabawi',
    excerpt: 'Discover the historical gems of Madinah including Mount Uhud, Quba Mosque, and the iconic date farms.',
    author: 'Usman Ali',
    initials: 'UA',
    date: 'Mar 18, 2026',
    readTime: '8 min',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80',
    category: 'Spirituality',
    title: 'Maximizing Your Spiritual Experience During Umrah',
    excerpt: 'Practical tips to maintain focus, make meaningful duas, and connect deeply with your faith throughout the journey.',
    author: 'Ayesha Siddiqui',
    initials: 'AS',
    date: 'Mar 14, 2026',
    readTime: '7 min',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
    category: 'Travel Tips',
    title: 'Navigating Jeddah Airport: A Complete Pilgrim\'s Guide',
    excerpt: 'Step-by-step walkthrough of King Abdulaziz International Airport — immigration, transport, and helpful tips.',
    author: 'Ahmad Malik',
    initials: 'AM',
    date: 'Mar 10, 2026',
    readTime: '5 min',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=80',
    category: 'Umrah Guide',
    title: 'Umrah During Ramadan: What Makes It Special',
    excerpt: 'Why performing Umrah in Ramadan is equivalent to Hajj in reward, and how to plan your blessed journey.',
    author: 'Fatima Hassan',
    initials: 'FH',
    date: 'Mar 5, 2026',
    readTime: '9 min',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80',
    category: 'Packing',
    title: 'What to Wear for Umrah: Men\'s & Women\'s Clothing Guide',
    excerpt: 'Complete guide to Ihram clothing, modest wear options, and weather-appropriate outfits for Makkah and Madinah.',
    author: 'Ayesha Siddiqui',
    initials: 'AS',
    date: 'Feb 28, 2026',
    readTime: '6 min',
  },
];

export default function BlogGrid({ activeCategory }) {
  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <Section id="blog-posts">
      <Inner>
        {/* Featured Article */}
        {activeCategory === 'All' && (
          <FeaturedCard>
            <FeaturedImg>
              <img
                src={withImageFallback(featuredPost.img, 0)}
                alt={featuredPost.title}
                loading="lazy"
                onError={(event) => handleImageError(event, 0)}
              />
            </FeaturedImg>
            <FeaturedBody>
              <CategoryBadge>
                <HiOutlineBookmarkAlt style={{ fontSize: '0.72rem' }} />
                {featuredPost.category}
              </CategoryBadge>
              <FeaturedTitle>{featuredPost.title}</FeaturedTitle>
              <FeaturedExcerpt>{featuredPost.excerpt}</FeaturedExcerpt>
              <MetaRow>
                <MetaItem><FiUser /> {featuredPost.author}</MetaItem>
                <MetaItem><FiCalendar /> {featuredPost.date}</MetaItem>
                <MetaItem><FiClock /> {featuredPost.readTime}</MetaItem>
              </MetaRow>
              <ReadMoreLink href="#blog">
                Read Full Article <FiArrowRight />
              </ReadMoreLink>
            </FeaturedBody>
          </FeaturedCard>
        )}

        {/* Articles Grid */}
        <Grid>
          {filtered.map((post, i) => (
            <Card key={post.id} $delay={`${i * 0.08}s`}>
              <CardImg>
                <img
                  src={withImageFallback(post.img, i + 1)}
                  alt={post.title}
                  loading="lazy"
                  onError={(event) => handleImageError(event, i + 1)}
                />
                <ReadTimeBadge><FiClock /> {post.readTime}</ReadTimeBadge>
              </CardImg>
              <CardBody>
                <CardCategory>
                  <HiOutlineBookmarkAlt style={{ fontSize: '0.7rem' }} />
                  {post.category}
                </CardCategory>
                <CardTitle>{post.title}</CardTitle>
                <CardExcerpt>{post.excerpt}</CardExcerpt>
                <CardFooter>
                  <AuthorInfo>
                    <AuthorAvatar>{post.initials}</AuthorAvatar>
                    <AuthorName>{post.author}</AuthorName>
                  </AuthorInfo>
                  <DateInfo><FiCalendar /> {post.date}</DateInfo>
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
