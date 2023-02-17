import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/posts.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostserviceService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  getPostsPorId(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }

  // getComentsPorId(id: number): Observable<Post> {
  //   return this.http.get<Post>(`${this.baseUrl}/posts/${id}/comments`);
  // }

  // agregarPost(post: Post): Observable<Post> {
  //   // para crear uno nuevo
  //   return this.http.post<Post>(`${this.baseUrl}/posts`, post);
  // }

  // agregarPost(post: Post) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   });
  //   return this.http.post(`${this.baseUrl}/posts`, JSON.stringify(post), {
  //     headers,
  //   });
  // }
  addProduct(post: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.baseUrl, post, httpOptions);
  }
}
