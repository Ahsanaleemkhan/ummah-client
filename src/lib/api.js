/**
 * ──────────────────────────────────────────────────────
 *  Ummah Travel — Centralized Data / API Layer
 * ──────────────────────────────────────────────────────
 *
 *  All dummy data is served through async functions that
 *  mirror a real API structure. When backend is ready,
 *  simply replace the function bodies with actual fetch()
 *  calls — component code stays untouched.
 *
 *  Usage in components:
 *    import { getUmrahPackages } from '@/lib/api';
 *    const packages = await getUmrahPackages();
 * ──────────────────────────────────────────────────────
 */

// const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.ummahtravel.com/v1';

/* ═══════════════════════════════════════════════
   UMRAH PACKAGES
   ═══════════════════════════════════════════════ */
const umrahPackages = [
  { id: 1, img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', nights: '14 Nights', title: 'Economy Umrah Package', desc: 'Comfortable economy-class experience with group accommodation near Haram in Makkah and Madinah.', hotel: '4-Star Hotel', meals: 'Breakfast Included', transport: 'Group Transport', visa: 'Visa Included', price: 'Rs. 185,000', per: '/person', rating: '4.8', category: 'economy', popular: false },
  { id: 2, img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80', nights: '21 Nights', title: 'Premium Umrah Package', desc: 'Upgraded rooms 50m from Haram, direct flights, full visa support, and a dedicated group guide.', hotel: '5-Star Hotel', meals: 'Full Board', transport: 'Private Transport', visa: 'Visa Included', price: 'Rs. 385,000', per: '/person', rating: '4.9', category: 'premium', popular: true },
  { id: 3, img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80', nights: '10 Nights', title: 'Budget Umrah Package', desc: 'Affordable yet complete Umrah experience with group transport and visa processing included.', hotel: '3-Star Hotel', meals: 'Bed & Breakfast', transport: 'Group Transport', visa: 'Visa Included', price: 'Rs. 120,000', per: '/person', rating: '4.7', category: 'budget', popular: false },
  { id: 4, img: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=80', nights: '28 Nights', title: 'Ramadan Special Package', desc: 'Spend Ramadan in the Holy Lands with premium Haram-facing rooms, Iftar & Suhoor.', hotel: '5-Star Haram View', meals: 'All Inclusive', transport: 'Private Transport', visa: 'Visa + Insurance', price: 'Rs. 550,000', per: '/person', rating: '5.0', category: 'premium', popular: true },
  { id: 5, img: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=80', nights: '7 Nights', title: 'Express Umrah Package', desc: 'Short stay covering all rituals with 3-night Makkah and 4-night Madinah stays.', hotel: '4-Star Hotel', meals: 'Breakfast Included', transport: 'Group Transport', visa: 'Visa Included', price: 'Rs. 95,000', per: '/person', rating: '4.6', category: 'budget', popular: false },
  { id: 6, img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80', nights: '14 Nights', title: 'Family Umrah Package', desc: 'Spacious family suites, kid-friendly amenities, and dedicated family concierge.', hotel: '5-Star Suite', meals: 'Full Board', transport: 'Private Van', visa: 'Family Visa Deal', price: 'Rs. 320,000', per: '/person', rating: '4.9', category: 'economy', popular: true },
];

export async function getUmrahPackages(category = 'all') {
  // TODO: fetch(`${API_BASE}/umrah-packages?category=${category}`)
  await delay(0);
  return category === 'all' ? umrahPackages : umrahPackages.filter(p => p.category === category);
}

export async function getUmrahPackageById(id) {
  // TODO: fetch(`${API_BASE}/umrah-packages/${id}`)
  await delay(0);
  return umrahPackages.find(p => p.id === id) || null;
}

/* ═══════════════════════════════════════════════
   HOTELS
   ═══════════════════════════════════════════════ */
const hotels = [
  { id: 1, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', title: 'Swissotel Al Maqam', location: 'Makkah, Saudi Arabia', distance: '50m from Haram', stars: 5, rating: '4.9', reviews: 2340, price: 'Rs. 45,000', per: '/night', category: 'makkah', featured: true, amenities: ['wifi', 'pool', 'spa', 'restaurant', 'parking', 'gym'] },
  { id: 2, img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', title: 'Hilton Suites Makkah', location: 'Makkah, Saudi Arabia', distance: '200m from Haram', stars: 5, rating: '4.8', reviews: 1856, price: 'Rs. 32,000', per: '/night', category: 'makkah', featured: false, amenities: ['wifi', 'restaurant', 'parking', 'gym'] },
  { id: 3, img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80', title: 'Pullman Zamzam Makkah', location: 'Makkah, Saudi Arabia', distance: '100m from Haram', stars: 5, rating: '4.7', reviews: 1420, price: 'Rs. 38,000', per: '/night', category: 'makkah', featured: true, amenities: ['wifi', 'restaurant', 'spa', 'parking'] },
  { id: 4, img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80', title: 'The Oberoi Madinah', location: 'Madinah, Saudi Arabia', distance: '150m from Masjid Nabawi', stars: 5, rating: '4.9', reviews: 980, price: 'Rs. 42,000', per: '/night', category: 'madinah', featured: true, amenities: ['wifi', 'pool', 'spa', 'restaurant', 'parking', 'gym'] },
  { id: 5, img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80', title: 'Shaza Al Madina', location: 'Madinah, Saudi Arabia', distance: '300m from Masjid Nabawi', stars: 4, rating: '4.6', reviews: 760, price: 'Rs. 22,000', per: '/night', category: 'madinah', featured: false, amenities: ['wifi', 'restaurant', 'parking'] },
  { id: 6, img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80', title: 'Crowne Plaza Madinah', location: 'Madinah, Saudi Arabia', distance: '500m from Masjid Nabawi', stars: 4, rating: '4.5', reviews: 640, price: 'Rs. 18,000', per: '/night', category: 'madinah', featured: false, amenities: ['wifi', 'pool', 'restaurant', 'parking', 'gym'] },
  { id: 7, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80', title: 'Makkah Clock Royal Tower', location: 'Makkah, Saudi Arabia', distance: '80m from Haram', stars: 5, rating: '4.8', reviews: 3100, price: 'Rs. 55,000', per: '/night', category: 'makkah', featured: true, amenities: ['wifi', 'pool', 'spa', 'restaurant', 'parking', 'gym'] },
  { id: 8, img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', title: 'Anwar Al Madinah Movenpick', location: 'Madinah, Saudi Arabia', distance: '200m from Masjid Nabawi', stars: 5, rating: '4.7', reviews: 1150, price: 'Rs. 28,000', per: '/night', category: 'madinah', featured: false, amenities: ['wifi', 'restaurant', 'spa', 'parking'] },
];

export async function getHotels(category = 'all') {
  // TODO: fetch(`${API_BASE}/hotels?city=${category}`)
  await delay(0);
  return category === 'all' ? hotels : hotels.filter(h => h.category === category);
}

export async function getHotelById(id) {
  // TODO: fetch(`${API_BASE}/hotels/${id}`)
  await delay(0);
  return hotels.find(h => h.id === id) || null;
}

export async function getFeaturedHotels() {
  // TODO: fetch(`${API_BASE}/hotels?featured=true`)
  await delay(0);
  return hotels.filter(h => h.featured);
}

/* ═══════════════════════════════════════════════
   FLIGHTS
   ═══════════════════════════════════════════════ */
const flightRoutes = [
  { id: 1, from: { code: 'ISB', name: 'Islamabad' }, to: { code: 'JED', name: 'Jeddah' }, duration: '4h 30m', price: 'Rs. 85,000', airline: 'Saudi Airlines', color: '#006633' },
  { id: 2, from: { code: 'LHR', name: 'London' }, to: { code: 'JED', name: 'Jeddah' }, duration: '6h 15m', price: 'Rs. 145,000', airline: 'British Airways', color: '#2e5c9a' },
  { id: 3, from: { code: 'DXB', name: 'Dubai' }, to: { code: 'MED', name: 'Madinah' }, duration: '2h 45m', price: 'Rs. 52,000', airline: 'Emirates', color: '#d71920' },
  { id: 4, from: { code: 'KHI', name: 'Karachi' }, to: { code: 'JED', name: 'Jeddah' }, duration: '3h 50m', price: 'Rs. 78,000', airline: 'PIA', color: '#006838' },
  { id: 5, from: { code: 'YYZ', name: 'Toronto' }, to: { code: 'JED', name: 'Jeddah' }, duration: '12h 30m', price: 'Rs. 210,000', airline: 'Turkish Airlines', color: '#c8102e' },
  { id: 6, from: { code: 'LHE', name: 'Lahore' }, to: { code: 'MED', name: 'Madinah' }, duration: '4h 10m', price: 'Rs. 82,000', airline: 'Flynas', color: '#7b2d8e' },
];

export async function getFlightRoutes() {
  // TODO: fetch(`${API_BASE}/flights/popular-routes`)
  await delay(0);
  return flightRoutes;
}

export async function searchFlights(params) {
  // TODO: fetch(`${API_BASE}/flights/search`, { method: 'POST', body: JSON.stringify(params) })
  await delay(300);
  return { results: flightRoutes, total: flightRoutes.length };
}

/* ═══════════════════════════════════════════════
   BLOG POSTS
   ═══════════════════════════════════════════════ */
const blogPosts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80', category: 'Travel Tips', title: '10 Essential Packing Tips for Your Umrah Journey', excerpt: 'Pack smarter with our curated checklist.', author: { name: 'Fatima Hassan', initials: 'FH' }, date: 'Mar 22, 2026', readTime: '6 min', slug: 'packing-tips-umrah' },
  { id: 2, img: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=80', category: 'Destinations', title: 'Exploring Madinah: Sacred Sites Beyond Masjid an-Nabawi', excerpt: 'Discover hidden historical gems of Madinah.', author: { name: 'Usman Ali', initials: 'UA' }, date: 'Mar 18, 2026', readTime: '8 min', slug: 'exploring-madinah' },
  { id: 3, img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80', category: 'Spirituality', title: 'Maximizing Your Spiritual Experience During Umrah', excerpt: 'Tips to connect deeply with your faith.', author: { name: 'Ayesha Siddiqui', initials: 'AS' }, date: 'Mar 14, 2026', readTime: '7 min', slug: 'spiritual-experience-umrah' },
  { id: 4, img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80', category: 'Travel Tips', title: "Navigating Jeddah Airport: A Complete Pilgrim's Guide", excerpt: 'Step-by-step airport walkthrough.', author: { name: 'Ahmad Malik', initials: 'AM' }, date: 'Mar 10, 2026', readTime: '5 min', slug: 'jeddah-airport-guide' },
  { id: 5, img: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=80', category: 'Umrah Guide', title: 'Umrah During Ramadan: What Makes It Special', excerpt: 'Why Ramadan Umrah equals Hajj in reward.', author: { name: 'Fatima Hassan', initials: 'FH' }, date: 'Mar 5, 2026', readTime: '9 min', slug: 'umrah-ramadan' },
  { id: 6, img: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80', category: 'Packing', title: "What to Wear for Umrah: Men's & Women's Clothing Guide", excerpt: 'Complete Ihram and modest wear guide.', author: { name: 'Ayesha Siddiqui', initials: 'AS' }, date: 'Feb 28, 2026', readTime: '6 min', slug: 'umrah-clothing-guide' },
];

export async function getBlogPosts(category = 'all') {
  // TODO: fetch(`${API_BASE}/blog?category=${category}`)
  await delay(0);
  return category === 'all' ? blogPosts : blogPosts.filter(p => p.category === category);
}

export async function getBlogPostBySlug(slug) {
  // TODO: fetch(`${API_BASE}/blog/${slug}`)
  await delay(0);
  return blogPosts.find(p => p.slug === slug) || null;
}

/* ═══════════════════════════════════════════════
   REVIEWS
   ═══════════════════════════════════════════════ */
const reviews = [
  { id: 1, text: 'Best Umrah experience of my life. Everything was perfectly arranged.', stars: 5, name: 'Muhammad Bilal', sub: 'Pakistan', initials: 'MB' },
  { id: 2, text: 'Premium package for our parents — they were absolutely delighted.', stars: 5, name: 'Sarah Khan', sub: 'United Kingdom', initials: 'SK' },
  { id: 3, text: 'Affordable, transparent pricing. Visa processed in 3 days.', stars: 5, name: 'Ali Raza', sub: 'Canada', initials: 'AR' },
  { id: 4, text: 'Family package was perfect. Kids comfortable, meals great.', stars: 5, name: 'Hina Pervez', sub: 'UAE', initials: 'HP' },
  { id: 5, text: 'Third time booking — Ramadan special was beyond expectations.', stars: 5, name: 'Omar Farooq', sub: 'USA', initials: 'OF' },
  { id: 6, text: 'Every detail taken care of. True 5-star service at economy prices.', stars: 5, name: 'Zainab Ahmed', sub: 'Australia', initials: 'ZA' },
];

export async function getReviews() {
  // TODO: fetch(`${API_BASE}/reviews`)
  await delay(0);
  return reviews;
}

/* ═══════════════════════════════════════════════
   TEAM
   ═══════════════════════════════════════════════ */
const teamMembers = [
  { id: 1, name: 'Ahmad Malik', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { id: 2, name: 'Fatima Hassan', role: 'Operations Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { id: 3, name: 'Usman Ali', role: 'Head of Packages', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { id: 4, name: 'Ayesha Siddiqui', role: 'Customer Relations', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
];

export async function getTeamMembers() {
  // TODO: fetch(`${API_BASE}/team`)
  await delay(0);
  return teamMembers;
}

/* ═══════════════════════════════════════════════
   FORM SUBMISSIONS
   ═══════════════════════════════════════════════ */
export async function submitContactForm(formData) {
  // TODO: fetch(`${API_BASE}/contact`, { method: 'POST', body: JSON.stringify(formData) })
  await delay(500);
  return { success: true, message: 'Thank you! We will get back to you within 2 hours.' };
}

export async function subscribeNewsletter(email) {
  // TODO: fetch(`${API_BASE}/newsletter`, { method: 'POST', body: JSON.stringify({ email }) })
  await delay(300);
  return { success: true, message: 'Successfully subscribed!' };
}

/* ═══════════════════════════════════════════════
   UTILITY
   ═══════════════════════════════════════════════ */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
