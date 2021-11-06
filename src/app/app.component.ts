import { Post } from './Shared/DTO/posts.dto';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // posts: Post[] = [];

  show = false;

  post: Post = {
    userId: 0,
    title: '',
    body: '',
  };
  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    // this.appService.getPosts().subscribe((data: Post[]) => {
    //   this.posts = data;
    // });
  }

  showHide() {
    this.show = !this.show;
  }

  createPost() {
    console.log(this.post);

    // this.appService.createPost(this.post).subscribe((data) => {
    //   // Do what ever you want with that data
    // });
  }
}
