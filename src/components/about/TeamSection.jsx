'use client';

import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const Section = styled.section`
  background: #f7f8f5;
  padding: 4.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 360px;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.35s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(27,107,58,0.12);
  }
`;

const AvatarWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    filter: grayscale(20%);
  }

  ${Card}:hover & img {
    transform: scale(1.06);
    filter: grayscale(0%);
  }
`;

const RoleBadge = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(27,107,58,0.9);
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  backdrop-filter: blur(6px);
  white-space: nowrap;
`;

const CardBody = styled.div`
  padding: 1.15rem 1rem;
`;

const Name = styled.h3`
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.2rem;
`;

const Role = styled.p`
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 0.65rem;
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f0f1ec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  color: #555;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #1B6B3A;
    color: #fff;
  }
`;

const team = [
  {
    name: 'Ahmad Malik',
    role: 'Founder & CEO',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Fatima Hassan',
    role: 'Operations Director',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Usman Ali',
    role: 'Head of Packages',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Ayesha Siddiqui',
    role: 'Customer Relations',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
];

export default function TeamSection() {
  return (
    <Section id="team">
      <SectionHeader>
        <Title>Meet Our Team</Title>
        <Subtitle>Passionate professionals dedicated to making your journey seamless</Subtitle>
      </SectionHeader>

      <Grid>
        {team.map((member, index) => (
          <Card key={member.name}>
            <AvatarWrapper>
              <img
                src={withImageFallback(member.img, index)}
                alt={member.name}
                loading="lazy"
                onError={(event) => handleImageError(event, index)}
              />
              <RoleBadge>{member.role}</RoleBadge>
            </AvatarWrapper>
            <CardBody>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
              <SocialRow>
                <SocialIcon href="#" aria-label="LinkedIn">in</SocialIcon>
                <SocialIcon href="#" aria-label="Twitter">𝕏</SocialIcon>
                <SocialIcon href="#" aria-label="Email">✉</SocialIcon>
              </SocialRow>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
