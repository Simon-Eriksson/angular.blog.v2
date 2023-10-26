import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  // Implement logic to create a new blog post

  newpost: string = "";

  constructor(private createPost: BlogService) { }
}
