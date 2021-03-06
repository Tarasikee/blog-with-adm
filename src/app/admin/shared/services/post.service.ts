import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FBCreateResponse, IPost} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PostService {
  constructor(private http: HttpClient) {
  }

  create(post: IPost): Observable<IPost> {
    return this.http.post(`${environment.FBDBUrl}/posts.json`, post)
      .pipe(map((res: FBCreateResponse) => {
        const newPost: IPost = {
          ...post,
          id: res.name,
          date: new Date(post.date)
        };
        return newPost;
      }));
  }

  update(post: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`${environment.FBDBUrl}/posts/${post.id}.json`, post);
  }

  delete(id: string): Observable<IPost> {
    return this.http.delete<IPost>(`${environment.FBDBUrl}/posts/${id}.json`);
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost>(`${environment.FBDBUrl}/posts.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }));
        })
      );
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${environment.FBDBUrl}/posts/${id}.json`)
      .pipe(map((post: IPost) => {
        return {
          ...post, id,
          date: new Date(post.date)
        };
      }));
  }
}
