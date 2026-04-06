'use client';

import { useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const CUSTOM_CSS_TAG_ID = 'ummah-travel-cms-custom-css';

function toText(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value).trim();
}

function setCssVar(root, variableName, value) {
  const text = toText(value);

  if (!text) {
    root.style.removeProperty(variableName);
    return;
  }

  root.style.setProperty(variableName, text);
}

function normalizeTokens(source) {
  const tokenSource = source && typeof source === 'object' ? source : {};

  return {
    bodyFontFamily: tokenSource.bodyFontFamily || tokenSource.fontFamily || '',
    headingFontFamily: tokenSource.headingFontFamily || tokenSource.fontFamilyHeading || '',
    bodyFontSize: tokenSource.bodyFontSize || tokenSource.baseFontSize || '',
    headingScale: tokenSource.headingScale || '',
    lineHeight: tokenSource.lineHeight || tokenSource.bodyLineHeight || '',
    primaryColor: tokenSource.primaryColor || tokenSource.brandPrimary || '',
    secondaryColor: tokenSource.secondaryColor || tokenSource.brandSecondary || '',
    textColor: tokenSource.textColor || tokenSource.bodyTextColor || '',
    headingColor: tokenSource.headingColor || tokenSource.titleColor || '',
    backgroundColor: tokenSource.backgroundColor || tokenSource.pageBackground || '',
    surfaceColor: tokenSource.surfaceColor || tokenSource.cardBackground || '',
    borderRadius: tokenSource.borderRadius || tokenSource.radius || '',
  };
}

function applyTokens(tokens) {
  const root = document.documentElement;

  setCssVar(root, '--app-body-font-family', tokens.bodyFontFamily);
  setCssVar(root, '--app-heading-font-family', tokens.headingFontFamily);
  setCssVar(root, '--app-body-font-size', tokens.bodyFontSize);
  setCssVar(root, '--app-heading-scale', tokens.headingScale);
  setCssVar(root, '--app-line-height', tokens.lineHeight);
  setCssVar(root, '--app-primary-color', tokens.primaryColor);
  setCssVar(root, '--app-secondary-color', tokens.secondaryColor);
  setCssVar(root, '--app-text-color', tokens.textColor);
  setCssVar(root, '--app-heading-color', tokens.headingColor);
  setCssVar(root, '--app-background-color', tokens.backgroundColor);
  setCssVar(root, '--app-surface-color', tokens.surfaceColor);
  setCssVar(root, '--app-border-radius', tokens.borderRadius);
}

function applyCustomCss(customCss) {
  const cssText = toText(customCss);
  const existing = document.getElementById(CUSTOM_CSS_TAG_ID);

  if (!cssText) {
    if (existing) {
      existing.remove();
    }
    return;
  }

  if (existing) {
    existing.textContent = cssText;
    return;
  }

  const styleTag = document.createElement('style');
  styleTag.id = CUSTOM_CSS_TAG_ID;
  styleTag.textContent = cssText;
  document.head.appendChild(styleTag);
}

async function fetchJson(path) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.message || payload?.error || `Failed to fetch ${path}`);
  }

  return payload;
}

export default function CmsDesignTokensProvider({ children }) {
  useEffect(() => {
    let isDisposed = false;

    const loadTokens = async () => {
      try {
        const [siteSettingsResult, sharedThemeResult] = await Promise.allSettled([
          fetchJson('/content/site-settings'),
          fetchJson('/content/pages/shared/theme'),
        ]);

        if (isDisposed) {
          return;
        }

        const siteSettings = siteSettingsResult.status === 'fulfilled'
          ? siteSettingsResult.value?.data || {}
          : {};
        const sharedThemeSection = sharedThemeResult.status === 'fulfilled'
          ? sharedThemeResult.value?.data?.content || {}
          : {};

        const merged = {
          ...(siteSettings?.designTokens || {}),
          ...(siteSettings?.typography || {}),
          ...(sharedThemeSection || {}),
        };

        applyTokens(normalizeTokens(merged));

        const customCss = toText(sharedThemeSection?.customCss)
          || toText(siteSettings?.customCss);
        applyCustomCss(customCss);
      } catch {
        // Keep frontend stable and fallback to default design tokens.
      }
    };

    loadTokens();

    return () => {
      isDisposed = true;
    };
  }, []);

  return children;
}
