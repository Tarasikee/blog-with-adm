import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.module';

@Component({
  selector: 'app-admin-layote',
  templateUrl: './admin-layote.component.html',
  styleUrls: ['./admin-layote.component.sass']
})
export class AdminLayoteComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  logout(e: Event): void {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin']);
  }
}
