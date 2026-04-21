'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import Footer from '../../../components/Footer';
import SiteNavbar from '../../../components/SiteNavbar';
import { blogPosts, getBlogBySlug } from '../../../lib/blogContent';
import { handleImageError, withImageFallback } from '../../../lib/imageFallbacks';
import { usePageContent } from '../../../lib/usePageContent';

const Main = styled.main`
  background: #f7f8f5;
  min-height: 100vh;
  color: #1f1f1f;
  padding-top: 70px;
`;

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 2.2rem 1.2rem 3rem;
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
  font-size: 0.76rem;
  color: #5d5d5d;
  margin-bottom: 1rem;

  a {
    color: #1b6b3a;
    text-decoration: none;
    font-weight: 700;
  }
`;

const HeroCard = styled.section`
  background: linear-gradient(155deg, #0f4f2c 0%, #1b6b3a 45%, #279559 100%);
  border-radius: 20px;
  color: #fff;
  padding: 1.5rem 1.35rem;
  box-shadow: 0 16px 36px rgba(15, 79, 44, 0.2);
`;

const Category = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0.75rem 0 0;
  font-size: clamp(1.35rem, 2.8vw, 2.1rem);
  line-height: 1.25;
`;

const Intro = styled.p`
  margin: 0.65rem 0 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
`;

const MetaRow = styled.div`
  margin-top: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.74rem;
`;

const HeroImageWrap = styled.div`
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.28);

  img {
    width: 100%;
    height: min(380px, 45vw);
    min-height: 220px;
    object-fit: cover;
    display: block;
  }
`;

const ArticleCard = styled.article`
  margin-top: 1rem;
  background: #fff;
  border: 1px solid #e7ece8;
  border-radius: 18px;
  padding: 1.35rem 1.1rem;
`;

const SectionBlock = styled.section`
  & + & {
    margin-top: 1.1rem;
    padding-top: 1.1rem;
    border-top: 1px solid #eef2ef;
  }

  h2 {
    margin: 0;
    color: #163524;
    font-size: 1.05rem;
    line-height: 1.35;
  }

  p {
    margin: 0.6rem 0 0;
    color: #435347;
    font-size: 0.86rem;
    line-height: 1.75;
  }

  ul {
    margin: 0.65rem 0 0;
    padding-left: 1.05rem;
    display: grid;
    gap: 0.35rem;
  }

  li {
    color: #2e4336;
    font-size: 0.83rem;
    line-height: 1.55;
  }
`;

const Closing = styled.p`
  margin: 1.2rem 0 0;
  padding: 0.85rem 0.9rem;
  border-left: 3px solid #c9a227;
  background: #f9fbf9;
  color: #304639;
  font-size: 0.86rem;
  line-height: 1.7;
`;

const CtaStrip = styled.div`
  margin-top: 1rem;
  padding: 1rem 1rem;
  border-radius: 14px;
  border: 1px solid #d7e7db;
  background: #f2f8f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  flex-wrap: wrap;

  p {
    margin: 0;
    color: #355141;
    font-size: 0.82rem;
    line-height: 1.55;
    max-width: 540px;
  }

  a {
    text-decoration: none;
    border-radius: 999px;
    background: #1b6b3a;
    color: #fff;
    border: 1px solid #1b6b3a;
    font-size: 0.76rem;
    font-weight: 700;
    padding: 0.48rem 0.95rem;
  }
`;

const RelatedWrap = styled.section`
  margin-top: 1rem;
  background: #fff;
  border: 1px solid #e7ece8;
  border-radius: 18px;
  padding: 1.2rem 1rem;

  h3 {
    margin: 0;
    color: #173725;
    font-size: 0.98rem;
  }
`;

const RelatedGrid = styled.div`
  margin-top: 0.85rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  text-decoration: none;
  border: 1px solid #e7ece8;
  border-radius: 12px;
  padding: 0.8rem;
  background: #fafcfb;

  .category {
    font-size: 0.62rem;
    color: #1b6b3a;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 800;
  }

  .title {
    margin-top: 0.35rem;
    color: #1f2d24;
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1.45;
  }

  .meta {
    margin-top: 0.35rem;
    color: #7b7b7b;
    font-size: 0.7rem;
  }
`;

const MissingCard = styled.section`
  background: #fff;
  border: 1px solid #e7ece8;
  border-radius: 16px;
  padding: 1.2rem 1rem;

  h1 {
    margin: 0;
    color: #153323;
    font-size: 1.05rem;
  }

  p {
    margin: 0.55rem 0 0;
    color: #616161;
    font-size: 0.84rem;
    line-height: 1.6;
  }

  a {
    margin-top: 0.85rem;
    display: inline-flex;
    text-decoration: none;
    font-size: 0.78rem;
    font-weight: 700;
    color: #1b6b3a;
  }
`;

export default function BlogDetailsPage() {
  const params = useParams();
  const { sharedSections } = usePageContent('blog');

  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || '';
  const post = useMemo(() => getBlogBySlug(slug), [slug]);

  const relatedPosts = useMemo(
    () => blogPosts.filter((item) => item.slug !== slug).slice(0, 2),
    [slug],
  );

  if (!post) {
    return (
      <Main>
        <SiteNavbar />
        <Wrapper>
          <MissingCard>
            <h1>Blog post not found</h1>
            <p>
              The article you are looking for is not available. Please return to the blog page to explore available posts.
            </p>
            <Link href="/blog">Back to Blog</Link>
          </MissingCard>
        </Wrapper>
        <Footer content={sharedSections.footer} />
      </Main>
    );
  }

  return (
    <Main>
      <SiteNavbar />

      <Wrapper>
        <Breadcrumb>
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/blog">Blog</Link>
          <span>›</span>
          <span>{post.title}</span>
        </Breadcrumb>

        <HeroCard>
          <Category>{post.category}</Category>
          <Title>{post.title}</Title>
          <Intro>{post.excerpt}</Intro>
          <MetaRow>
            <span>By {post.author.name}</span>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </MetaRow>

          <HeroImageWrap>
            <img
              src={withImageFallback(post.image || post.img, 0)}
              alt={post.title}
              loading="lazy"
              onError={(event) => handleImageError(event, 0)}
            />
          </HeroImageWrap>
        </HeroCard>

        <ArticleCard>
          <SectionBlock>
            <h2>Introduction</h2>
            <p>{post.intro}</p>
          </SectionBlock>

          {post.sections.map((section) => (
            <SectionBlock key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${section.heading}-paragraph-${paragraphIndex}`}>{paragraph}</p>
              ))}
              {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                <ul>
                  {section.bullets.map((item, bulletIndex) => (
                    <li key={`${section.heading}-bullet-${bulletIndex}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </SectionBlock>
          ))}

          <Closing>{post.closing}</Closing>

          <CtaStrip>
            <p>
              Want this article translated into a personalized travel plan? Our team can turn these recommendations into your exact itinerary.
            </p>
            <Link href="/contact">Talk to an Advisor</Link>
          </CtaStrip>
        </ArticleCard>

        <RelatedWrap>
          <h3>Related Articles</h3>
          <RelatedGrid>
            {relatedPosts.map((item) => (
              <RelatedCard key={item.slug} href={`/blog/${item.slug}`}>
                <div className="category">{item.category}</div>
                <div className="title">{item.title}</div>
                <div className="meta">{item.date} • {item.readTime}</div>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedWrap>
      </Wrapper>

      <Footer content={sharedSections.footer} />
    </Main>
  );
}
