// Mock database queries for development without PostgreSQL
import { mockDb } from './db.js';

let nextId = {
  users: 2,
  temperatures: 1,
  articles: 1,
  photos: 1
};

export const mockQueries = {
  // User queries
  findUserByEmail: (email) => {
    return mockDb.users.find(u => u.email === email);
  },
  
  createUser: (email, hashedPassword, name) => {
    const user = {
      id: nextId.users++,
      email,
      password: hashedPassword,
      name,
      created_at: new Date()
    };
    mockDb.users.push(user);
    return user;
  },
  
  // Temperature queries
  findTemperaturesByYear: (year) => {
    return mockDb.temperatures.filter(t => {
      const tYear = new Date(t.date).getFullYear();
      return tYear === year;
    });
  },
  
  createTemperature: (data) => {
    const temp = {
      id: nextId.temperatures++,
      ...data,
      created_at: new Date()
    };
    mockDb.temperatures.push(temp);
    return temp;
  },
  
  deleteTemperature: (id) => {
    const index = mockDb.temperatures.findIndex(t => t.id === id);
    if (index > -1) {
      mockDb.temperatures.splice(index, 1);
      return true;
    }
    return false;
  },
  
  // Article queries
  findAllArticles: () => {
    return mockDb.articles;
  },
  
  findArticleBySlug: (slug) => {
    return mockDb.articles.find(a => a.slug === slug);
  },
  
  createArticle: (title, content, slug, category) => {
    const article = {
      id: nextId.articles++,
      title,
      content,
      slug,
      category,
      created_at: new Date()
    };
    mockDb.articles.push(article);
    return article;
  },
  
  updateArticle: (id, title, content) => {
    const article = mockDb.articles.find(a => a.id === id);
    if (article) {
      article.title = title;
      article.content = content;
      return article;
    }
    return null;
  },
  
  deleteArticle: (id) => {
    const index = mockDb.articles.findIndex(a => a.id === id);
    if (index > -1) {
      mockDb.articles.splice(index, 1);
      return true;
    }
    return false;
  },
  
  // Photo queries
  findAllPhotos: () => {
    return mockDb.photos;
  },
  
  createPhoto: (title, description, imageUrl, category) => {
    const photo = {
      id: nextId.photos++,
      title,
      description,
      image_url: imageUrl,
      category,
      created_at: new Date()
    };
    mockDb.photos.push(photo);
    return photo;
  },
  
  deletePhoto: (id) => {
    const index = mockDb.photos.findIndex(p => p.id === id);
    if (index > -1) {
      mockDb.photos.splice(index, 1);
      return true;
    }
    return false;
  }
};
