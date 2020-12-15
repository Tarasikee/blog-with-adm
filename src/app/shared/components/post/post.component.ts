import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {

  constructor(public router: Router) {
  }

  openPost(): void {
    this.router.navigate(['/post', 123]);
  }
}
