const API_BASE_URL = 'http://localhost:5000/api';

export async function apiGet(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);
  return response.json();
}

export async function apiPost(path, payload, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  return response.json();
}

export default API_BASE_URL;
