'use client';

import { useState } from 'react';
import styled from 'styled-components';
import BlogHero from '../../components/blog/BlogHero';
import BlogFilters from '../../components/blog/BlogFilters';
import BlogGrid from '../../components/blog/BlogGrid';
import BlogNewsletter from '../../components/blog/BlogNewsletter';
import Footer from '../../components/Footer';
import { blogPosts, getBlogCategories } from '../../lib/blogContent';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { sections, sharedSections } = usePageContent('blog');
  const categories = getBlogCategories();

  return (
    <Main>
      {/* Hero with embedded navbar */}
      <BlogHero content={sections.hero} />

      {/* Search + Category Filters */}
      <BlogFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={categories}
      />

      {/* Featured Post + Blog Grid */}
      <BlogGrid activeCategory={activeCategory} posts={blogPosts} />

      {/* Newsletter CTA */}
      <BlogNewsletter content={sections.newsletter} />

      {/* Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
