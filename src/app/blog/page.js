'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import BlogHero from '../../components/blog/BlogHero';
import BlogFilters from '../../components/blog/BlogFilters';
import BlogGrid from '../../components/blog/BlogGrid';
import BlogNewsletter from '../../components/blog/BlogNewsletter';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { sections, sharedSections } = usePageContent('blog');

  return (
    <Main>
      {/* Navigation */}
      <Navbar backgroundColor="#0f6a38" dark sticky={false} />

      {/* 1. Hero */}
      <BlogHero content={sections.hero} />

      {/* 2. Search + Category Filters */}
      <BlogFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* 3. Featured Post + Blog Grid */}
      <BlogGrid activeCategory={activeCategory} />

      {/* 4. Newsletter CTA */}
      <BlogNewsletter content={sections.newsletter} />

      {/* 5. Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
