import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Shared/DTO/posts.dto';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(data: any) {
    return this.http.post('LInk', data);
  }
}
