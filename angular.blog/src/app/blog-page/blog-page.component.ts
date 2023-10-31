import { Component } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  // Implementera logik för att visa en detaljerat post med kommentar och likes/dislikes
  selectedPost: BlogPost | undefined; //specifik post
  newComment: string = ''; // ny kommentar 

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');

    if (title) { // kolla så title(id) inte är null
      this.selectedPost = this.blogService.getBlogPostByTitle(title);
    }
  }

  // lägg till kommentar
  addComment(comment: string) {
    if (this.selectedPost) {
      this.blogService.addComment(this.selectedPost, comment);
    }
  }
  // lägg till like
  addLike() {
    if (this.selectedPost) {
      this.blogService.addLike(this.selectedPost);
    }
  }
  // lägg till dislike
  addDislike() {
    if (this.selectedPost) {
      this.blogService.addDislike(this.selectedPost);
    }
  }

}
