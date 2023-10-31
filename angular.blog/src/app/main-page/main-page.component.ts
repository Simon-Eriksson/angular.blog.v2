import { Component } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // hämta blog-post
  blogPosts: BlogPost[];

  constructor(private blogService: BlogService) {
    this.blogPosts = this.blogService.getAllBlogPosts();
  }

}
