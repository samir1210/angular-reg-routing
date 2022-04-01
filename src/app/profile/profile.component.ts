import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: any;

  constructor(
    private service: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe(res => {
      console.log(res);
      this.userProfile = res;
    })
  }

  logout() {
    localStorage.setItem('loggedIn', JSON.stringify(false));
    this.router.navigate(['/register'])
  }

}
