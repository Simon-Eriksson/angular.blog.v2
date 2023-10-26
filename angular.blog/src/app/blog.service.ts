import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // Implement methods to fetch and store blog posts, likes, dislikes, and comments
  private blogPosts: BlogPost[] = [];

  constructor() {
    // Läs blogginlägg från local storage vid initiering av servicen
    const storedData = localStorage.getItem('blogPosts');
    this.blogPosts = storedData ? JSON.parse(storedData) : [];
  }

  getAllBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  addBlogPost(newPost: BlogPost): void {
    this.blogPosts.push(newPost);
    this.saveToLocalStorage();
  }

  // Implementera andra metoder för att uppdatera, radera, gilla, dislika, etc.

  private saveToLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }

}
