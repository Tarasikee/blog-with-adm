import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {IPost} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {

  posts: IPost[] = [];
  pSub!: Subscription;
  dSub!: Subscription;
  searchStr = '';

  constructor(
    private postService: PostService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.pSub = this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  removePost(id: string): void {
    this.dSub = this.postService.delete(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }

  openPost(id: string): void {
    this.router.navigate(['/admin', 'post', id, 'edit']);
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();    }
  }
}
