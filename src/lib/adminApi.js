const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function request(path, { method = 'GET', body, token } = {}) {
  const hasFormDataBody = typeof FormData !== 'undefined' && body instanceof FormData;
  const headers = {
    ...(hasFormDataBody ? {} : { 'Content-Type': 'application/json' }),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    ...(body !== undefined ? { body: hasFormDataBody ? body : JSON.stringify(body) } : {}),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = payload?.message || payload?.error || 'Request failed';
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return payload;
}

export function loginAdmin(credentials) {
  return request('/auth/admin/login', {
    method: 'POST',
    body: credentials,
  });
}

export function getAdminProfile(token) {
  return request('/auth/admin/me', { token });
}

export function getAdminResourceTypes(token) {
  return request('/admin/resources', { token });
}

export function getAdminOverview(token) {
  return request('/admin/overview', { token });
}

export function getAdminResources(token, resource, query = '') {
  const encodedQuery = query ? `?q=${encodeURIComponent(query)}` : '';
  return request(`/admin/resources/${resource}${encodedQuery}`, { token });
}

export function createAdminResource(token, resource, payload) {
  return request(`/admin/resources/${resource}`, {
    method: 'POST',
    token,
    body: payload,
  });
}

export function updateAdminResource(token, resource, id, payload) {
  return request(`/admin/resources/${resource}/${encodeURIComponent(id)}`, {
    method: 'PUT',
    token,
    body: payload,
  });
}

export function deleteAdminResource(token, resource, id) {
  return request(`/admin/resources/${resource}/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    token,
  });
}

export function getAdminIntegrations(token) {
  return request('/admin/integrations', { token });
}

export function updateAdminIntegration(token, integrationId, payload) {
  return request(`/admin/integrations/${encodeURIComponent(integrationId)}`, {
    method: 'PUT',
    token,
    body: payload,
  });
}

export function getAdminSiteSettings(token) {
  return request('/admin/site-settings', { token });
}

export function updateAdminSiteSettings(token, payload) {
  return request('/admin/site-settings', {
    method: 'PUT',
    token,
    body: payload,
  });
}

export function getAdminActivity(token, limit = 20) {
  return request(`/admin/activity?limit=${encodeURIComponent(limit)}`, { token });
}

export function getAdminPageContentPages(token) {
  return request('/admin/page-content/pages', { token });
}

export function getAdminPageContentPage(token, pageKey) {
  return request(`/admin/page-content/${encodeURIComponent(pageKey)}`, { token });
}

export function getAdminPageContentSection(token, pageKey, sectionKey) {
  return request(`/admin/page-content/${encodeURIComponent(pageKey)}/${encodeURIComponent(sectionKey)}`, { token });
}

export function updateAdminPageContentSection(token, pageKey, sectionKey, payload) {
  return request(`/admin/page-content/${encodeURIComponent(pageKey)}/${encodeURIComponent(sectionKey)}`, {
    method: 'PUT',
    token,
    body: payload,
  });
}

export function resetAdminPageContentSection(token, pageKey, sectionKey) {
  return request(`/admin/page-content/${encodeURIComponent(pageKey)}/${encodeURIComponent(sectionKey)}`, {
    method: 'DELETE',
    token,
  });
}

export function getAdminMedia(token, { query = '', limit = 100 } = {}) {
  const params = new URLSearchParams();
  if (query) params.set('q', query);
  if (limit) params.set('limit', String(limit));
  const suffix = params.toString() ? `?${params.toString()}` : '';

  return request(`/admin/media${suffix}`, { token });
}

export function uploadAdminMedia(token, file, { pageKey = '', sectionKey = '', fieldPath = '' } = {}) {
  const form = new FormData();
  form.append('file', file);

  if (pageKey) form.append('pageKey', pageKey);
  if (sectionKey) form.append('sectionKey', sectionKey);
  if (fieldPath) form.append('fieldPath', fieldPath);

  return request('/admin/media/upload', {
    method: 'POST',
    token,
    body: form,
  });
}

export function deleteAdminMedia(token, mediaId) {
  return request(`/admin/media/${encodeURIComponent(mediaId)}`, {
    method: 'DELETE',
    token,
  });
}
