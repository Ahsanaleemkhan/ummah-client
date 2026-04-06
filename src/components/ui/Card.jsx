'use client';

import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.shadow};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px ${({ theme }) => theme.colors.shadowMedium};
    border-color: ${({ theme }) => theme.colors.primary}30;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: ${({ $height }) => $height || '200px'};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CardBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
`;

export default function Card({ children, ...props }) {
    return <CardWrapper {...props}>{children}</CardWrapper>;
}

Card.Image = function CardImageComponent({ src, alt, height, badge, children }) {
    return (
        <CardImage $height={height}>
            {badge && <CardBadge>{badge}</CardBadge>}
      <img
        src={withImageFallback(src, 0)}
        alt={alt || ''}
        loading="lazy"
        onError={(event) => handleImageError(event, 0)}
      />
            {children}
        </CardImage>
    );
};

Card.Content = function CardContentComponent({ children, ...props }) {
    return <CardContent {...props}>{children}</CardContent>;
};
