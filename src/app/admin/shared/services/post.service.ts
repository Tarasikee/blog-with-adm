import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PostService {
  constructor(private http: HttpClient) {
  }

  create(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${environment.FBDBUrl}/posts.json`, post)
      .pipe(map((res: ) => {}));
  }
}
