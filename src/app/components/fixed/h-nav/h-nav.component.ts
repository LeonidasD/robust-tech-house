import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-h-nav',
  templateUrl: './h-nav.component.html',
  styleUrls: ['./h-nav.component.css']
})
export class HNavComponent implements OnInit {
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
