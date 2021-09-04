import { Post } from './../model/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }

  postMensagem(post: Post) {
    return this.http.post('http://localhost:3000/posts', post);
  }

}
