import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layote',
  templateUrl: './admin-layote.component.html',
  styleUrls: ['./admin-layote.component.sass']
})
export class AdminLayoteComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(e: Event): void {
    e.preventDefault();
    this.router.navigate(['/admin']);
  }
}
