const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const CACHE_TTL_MS = 30 * 1000;

const pageContentCache = new Map();

function cacheKey(pageKey) {
  return String(pageKey || '').trim().toLowerCase();
}

export async function fetchPageContent(pageKey, { force = false } = {}) {
  const key = cacheKey(pageKey);
  if (!key) {
    throw new Error('pageKey is required');
  }

  const existing = pageContentCache.get(key);
  const now = Date.now();

  if (!force && existing && now - existing.cachedAt < CACHE_TTL_MS) {
    return existing.data;
  }

  const response = await fetch(`${API_BASE}/content/pages/${encodeURIComponent(key)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.message || payload?.error || `Failed to load page content for ${key}`);
  }

  const data = payload?.data || {};

  pageContentCache.set(key, {
    cachedAt: now,
    data,
  });

  return data;
}

export function clearPageContentCache(pageKey = null) {
  if (!pageKey) {
    pageContentCache.clear();
    return;
  }

  pageContentCache.delete(cacheKey(pageKey));
}
