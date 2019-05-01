import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

      // reset login status
      if(localStorage.getItem('currentUser')){
        this.router.navigate(['']);
      }

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }


  onSubmit() {
      this.submitted = true;
      this.authenticationService.login(this.user.username, this.user.password)
          .pipe(first())
          .subscribe(
              data => {
                  Swal.fire({
                    title: 'Login Success',
                    text: 'Welcome back, ' + this.user.username,
                    type: 'success',
                    timer: 3000
                  })
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error;
                  Swal.fire({
                    title: 'Login Error',
                    text: this.error,
                    type: 'error',
                  })
              });
  }
}
