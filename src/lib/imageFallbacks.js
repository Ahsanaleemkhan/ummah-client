const FALLBACK_IMAGE_POOL = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80',
  'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1200&q=80',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80',
  'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
];

function isUsableImage(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function getFallbackImage(index = 0) {
  const safeIndex = Number.isFinite(index) ? Math.abs(Math.trunc(index)) : 0;
  return FALLBACK_IMAGE_POOL[safeIndex % FALLBACK_IMAGE_POOL.length];
}

export function withImageFallback(src, index = 0) {
  return isUsableImage(src) ? src.trim() : getFallbackImage(index);
}

export function handleImageError(event, index = 0) {
  const fallback = getFallbackImage(index);
  const target = event?.currentTarget;

  if (!target) {
    return;
  }

  if (target.src !== fallback) {
    target.src = fallback;
  }
}
