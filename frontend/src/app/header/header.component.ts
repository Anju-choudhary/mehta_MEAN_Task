import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = this.authService.isLoggedIn();
    });
    console.log(this.isLoggedIn);
  }

  //remove session id 
  logout() {
    localStorage.removeItem('user_id');
    this.authService.isLoggedIn$.next(false);
    this.router.navigate(['login']);
  }
}
