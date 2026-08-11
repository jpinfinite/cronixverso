/**
 * SchemaMarkup Component — CRONIXVERSO
 *
 * Generates JSON-LD structured data for Article, Person, Organization,
 * and BreadcrumbList schemas following schema.org specification.
 *
 * CRITICAL: Must use CRONIX terminology — "transmissões" (not posts),
 * "registros" (not articles), "Fundação" (fictional organization).
 * Maintain dark sci-fi narrative tone.
 *
 * Compliance: This is fictional sci-fi content. All schema names and
 * descriptions reflect the CRONIXVERSE universe, not real entities.
 */

import React from 'react';

interface TransmissionSchemaProps {
  /** Use "transmissão" (not article) */
  headline: string;
  description?: string;
  datePublished: string;
  dateModified?: string;
  author: { name: string; role?: string };
  image: string;
  url: string;
  /** Use "registro" (not article) */
  transmissionCategory: string;
  tags?: string[];
  wordCount?: number;
}

/**
 * Generates Article/NewsArticle schema using CRONIX terminology.
 * Uses "transmissões" and "registros" instead of posts/artigos.
 * @see https://schema.org/NewsArticle
 */
export const TransmissionSchema: React.FC<TransmissionSchemaProps> = ({
  headline,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
  transmissionCategory,
  tags,
  wordCount,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role || 'Transmissor da Fundação',
      url: 'https://cronixverso.com.br/',
      description:
        'Operador da Fundação CRONIX, transmissor de registros do universo tecnológico, IA e ciência.',
      knowsAbout: [
        'Tecnologia',
        'Inteligência Artificial',
        'Hardware',
        'Ciência',
        'Games',
        'Futuro',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fundação CRONIX',
      url: 'https://cronixverso.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cronixverso.com.br/logo-principal.svg',
        width: 600,
        height: 60,
      },
      description:
        'A Fundação CRONIX é a organização fictícia responsável pela transmissão de registros do universo tecnológico avançado.',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: transmissionCategory,
    ...(tags && tags.length > 0 && { keywords: tags.join(', ') }),
    ...(wordCount && { wordCount }),
    inLanguage: 'pt-BR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Generates WebSite schema with search action using CRONIX terminology.
 * @see https://schema.org/WebSite
 */
export const WebSiteSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CRONIXVERSO | Fundação CRONIX',
    url: 'https://cronixverso.com.br',
    description:
      'Universo da Tecnologia, IA, Games e Ciência. Transmissões e registros da Fundação CRONIX.',
    inLanguage: 'pt-BR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cronixverso.com.br/?busca={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fundação CRONIX',
      logo: 'https://cronixverso.com.br/logo-principal.svg',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Generates Organization schema for Fundação CRONIX.
 * @see https://schema.org/Organization
 */
export const FoundationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fundação CRONIX',
    url: 'https://cronixverso.com.br',
    description:
      'Organização fictícia responsável por transmissões e registros do universo tecnológico avançado.',
    logo: 'https://cronixverso.com.br/logo-principal.svg',
    sameAs: [],
    foundingDate: '2026-01-01',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Generates BreadcrumbList schema for navigation context.
 * @see https://schema.org/BreadcrumbList
 */
export const BreadcrumbSchema: React.FC<{
  items: Array<{ name: string; url: string }>;
}> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Generates FAQPage schema using CRONIX terminology.
 * @see https://schema.org/FAQPage
 */
export const FAQSchema: React.FC<{
  faqs: Array<{ question: string; answer: string }>;
}> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Generates Review schema for AI tool/technology reviews.
 * Uses CRONIX terminology: "transmissões" and "registros".
 * @see https://schema.org/Review
 */
export const TechnologyReviewSchema: React.FC<{
  reviewName: string;
  reviewBody?: string;
  rating: { value: number };
  author: { name: string };
  reviewDate?: string;
  itemReviewed?: string;
}> = ({ reviewName, reviewBody, rating, author, reviewDate, itemReviewed }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: reviewName,
    ...(reviewBody && { description: reviewBody }),
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating.value,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: author.name,
    },
    ...(reviewDate && { datePublished: reviewDate }),
    ...(itemReviewed && {
      itemReviewed: {
        '@type': 'Product',
        name: itemReviewed,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
