const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function fetchAPI(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'API request failed');
    }

    return data;
}

// Flights
export const fetchFlights = (params = '') => fetchAPI(`/flights${params ? `?${params}` : ''}`);
export const fetchFlight = (id) => fetchAPI(`/flights/${id}`);

// Hotels
export const fetchHotels = (params = '') => fetchAPI(`/hotels${params ? `?${params}` : ''}`);
export const fetchHotel = (id) => fetchAPI(`/hotels/${id}`);

// Umrah Packages
export const fetchUmrahPackages = (params = '') => fetchAPI(`/umrah${params ? `?${params}` : ''}`);
export const fetchUmrahPackage = (id) => fetchAPI(`/umrah/${id}`);

// Tours
export const fetchTours = (params = '') => fetchAPI(`/tours${params ? `?${params}` : ''}`);
export const fetchTour = (id) => fetchAPI(`/tours/${id}`);

// Visas
export const fetchVisas = (params = '') => fetchAPI(`/visas${params ? `?${params}` : ''}`);

// Auth
export const registerUser = (userData) =>
    fetchAPI('/auth/register', { method: 'POST', body: JSON.stringify(userData) });

export const loginUser = (credentials) =>
    fetchAPI('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });

export const getCurrentUser = (token) =>
    fetchAPI('/auth/me', { headers: { Authorization: `Bearer ${token}` } });
