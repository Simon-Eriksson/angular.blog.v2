import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogPosts: BlogPost[] = [];

  constructor() {

    // Läs blogginlägg från local storage vid initiering av servicen
    const storedData = localStorage.getItem('blogPosts');
    this.blogPosts = storedData ? JSON.parse(storedData) : [];
  }

  // hämta blogposten med hjälp av titlen
  getBlogPostByTitle(title: string): BlogPost | undefined {
    return this.blogPosts.find(post => post.title === title);
  }

  // hämta alla blogposter
  getAllBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  // lägg till en ny
  addBlogPost(newPost: BlogPost): void {
    this.blogPosts.push(newPost);
    this.saveToLocalStorage();
  }

  // lägg till en kommentar
  addComment(post: BlogPost, comment: string) {
    post.comments.push(comment);
    this.saveToLocalStorage();
  }

  // + på like 
  addLike(post: BlogPost) {
    post.likes++;
    this.saveToLocalStorage();
  }

  // + på dislike ( kan ändra till minus senare)
  addDislike(post: BlogPost) {
    post.dislikes++;
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }

}
