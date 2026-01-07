const API_URL = import.meta.env.VITE_API_URL || 'https://backend-production-4d73.up.railway.app/api';

export const api = {
  // Auth
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
  },

  verifyToken: async (token: string) => {
    const res = await fetch(`${API_URL}/auth/verify`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Token verification failed');
    return res.json();
  },

  // Temperatures
  getTemperatures: async (year: number) => {
    const res = await fetch(`${API_URL}/temperatures/year/${year}`);
    if (!res.ok) throw new Error('Failed to fetch temperatures');
    return res.json();
  },

  addTemperature: async (token: string, data: any) => {
    const res = await fetch(`${API_URL}/temperatures`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to add temperature');
    return res.json();
  },

  // Articles
  getArticles: async () => {
    const res = await fetch(`${API_URL}/articles`);
    if (!res.ok) throw new Error('Failed to fetch articles');
    return res.json();
  },

  getArticle: async (slug: string) => {
    const res = await fetch(`${API_URL}/articles/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch article');
    return res.json();
  },

  createArticle: async (token: string, data: any) => {
    const res = await fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to create article');
    return res.json();
  },

  // Photos
  getPhotos: async () => {
    const res = await fetch(`${API_URL}/photos`);
    if (!res.ok) throw new Error('Failed to fetch photos');
    return res.json();
  },

  uploadPhoto: async (token: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/photos`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
    if (!res.ok) throw new Error('Failed to upload photo');
    return res.json();
  },

  // Pages
  getPage: async (path: string) => {
    const res = await fetch(`${API_URL}/pages${path}`);
    if (!res.ok) throw new Error('Failed to fetch page');
    return res.json();
  },

  updatePage: async (token: string, path: string, data: { title: string; content: string }) => {
    const res = await fetch(`${API_URL}/pages${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update page');
    return res.json();
  }
};

