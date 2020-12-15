import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.sass']
})
export class PostPageComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  returnToMain(): void {
    this.router.navigate(['/']);
  }
}
