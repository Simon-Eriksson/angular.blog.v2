import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { BlogPost } from '../blog-post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  // Implementera logik för att skapa en ny blog post
  newPost: BlogPost = {
    title: '',
    thumbnailUrl: '',
    body: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  };

  // kolla så den inte laddas 2 ggr. 
  isSubmitted = false;

  constructor(private blogService: BlogService, private router: Router,) { }

  createPost() {
    console.log('Form submitted');
    if (this.isSubmitted) {
      return; // gör inget om det redan är publicerat
    }

    this.isSubmitted = true;

    this.router.navigate(["/"]); //navigera -> home
    this.blogService.addBlogPost(this.newPost); // ny post
    this.newPost = {
      title: '',
      thumbnailUrl: '',
      body: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };
  }

}
