const LOCAL_IMAGE_POOL = [
  '/About us/Hero section 1.jpg',
  '/About us/Hero Section 2.jpg',
  '/About us/Hero section 3.jpg',
  '/About us/Our story.jpg',
  '/Blog-Travel Tips/what to wear.jpg',
  '/Blog-Travel Tips/Umrah in ramadan.jpg',
  '/Blog-Travel Tips/Jeddah Airport.jpg',
  '/Blog-Travel Tips/5216a180e92a93c4a13b3e207f3e32cc.jpg',
  '/Homepage/Makkah - Madina.jpg',
  '/Homepage/Turkey.jpg',
  '/Homepage/Dubai.jpg',
  '/Homepage/Swat valley.jpg',
  '/Hotels/Swissotel Al Maqam.jpg',
  '/Hotels/Pullman Zamzam Madinah.jpg',
  '/Hotels/Madinah Hilton.jpg',
  '/Hotels/Fairmont Makkah Clock Tower.jpg',
  '/Hotels/Conrad Makkah.jpg',
  '/Hotels/Anwar Al Madinah.jpg',
  '/Hotels/Islamabad.jpg',
  '/Hotels/Lahore.jpg',
  '/Tour Packages/Swiss Alps.jpg',
  '/Tour Packages/Morocco Heritage Trail.jpg',
  '/Tour Packages/Malaysia.jpg',
  '/Tour Packages/Jordan Petra Expedition.jpg',
  '/Tour Packages/Dubai Desert Safari.jpg',
  '/Tour Packages/Cappadocia.jpg',
  '/Tour Packages/Balkan.jpg',
  '/Tour Packages/Azerbaijan.jpg',
  '/Umrah Packaeges/what we offer.jpg',
  '/Umrah Packaeges/0a9a41a46ab67f1febf56a4cc02ddc7c.jpg',
  '/Umrah Packaeges/56c4e30234957cc17e10a766e1740c14.jpg',
  '/Umrah Packaeges/44de525b1f1b3f7f336cd89ffce853d5.jpg',
  '/Umrah Packaeges/82d225f4902fa48e0f41a2ddcdadfc1a.jpg',
  '/Umrah Packaeges/6014d79d61e88170381788a60c3f297b.jpg',
  '/Umrah Packaeges/8e3bfca574c533c79b8e915f2a8fd680.jpg',
  '/Umrah Packaeges/94eebc8a01c472e01209ccfb52f60a24.jpg',
  '/Umrah Packaeges/ff2182c54adf6a36f4ab37de8270efeb.jpg',
  '/Umrah Packaeges/fa2d099f27677255f21328db3e15f332.jpg',
].map((assetPath) => encodeURI(assetPath));

const PLACEHOLDER_IMAGE_PATTERN = /(images\.unsplash\.com|source\.unsplash\.com|cdn\.pixabay\.com|picsum\.photos|placehold\.co|via\.placeholder\.com|dummyimage\.com)/i;
const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:/i;

function isUsableImage(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function toSafeIndex(index) {
  return Number.isFinite(index) ? Math.abs(Math.trunc(index)) : 0;
}

function hashString(value) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function normalizeSrc(src) {
  const trimmed = src.trim();

  if (trimmed.startsWith('/')) {
    return encodeURI(trimmed);
  }

  if (
    ABSOLUTE_URL_PATTERN.test(trimmed)
    || trimmed.startsWith('//')
    || trimmed.startsWith('data:')
    || trimmed.startsWith('blob:')
  ) {
    return trimmed;
  }

  return encodeURI(`/${trimmed.replace(/^\.?\//, '')}`);
}

function getPlaceholderReplacement(src, index = 0) {
  const safeIndex = toSafeIndex(index);
  const seededIndex = hashString(src) + safeIndex;
  return LOCAL_IMAGE_POOL[seededIndex % LOCAL_IMAGE_POOL.length];
}

export function getFallbackImage(index = 0) {
  const safeIndex = toSafeIndex(index);
  return LOCAL_IMAGE_POOL[safeIndex % LOCAL_IMAGE_POOL.length];
}

export function withImageFallback(src, index = 0) {
  if (!isUsableImage(src)) {
    return getFallbackImage(index);
  }

  const normalized = normalizeSrc(src);

  if (PLACEHOLDER_IMAGE_PATTERN.test(normalized)) {
    return getPlaceholderReplacement(normalized, index);
  }

  return normalized;
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
