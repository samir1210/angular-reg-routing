import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registerForm: FormGroup;

  constructor(
    private authService: AppService,
    private router: Router
  ) { }


  ngOnInit(): void {
    localStorage.setItem('loggedIn', JSON.stringify(false));
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      bio: new FormControl('', [Validators.required]),
    });
  }

  register() {
    console.log(this.registerForm)
    this.authService.register(this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      if(res.success){
        localStorage.setItem('loggedIn', JSON.stringify(true));
        this.router.navigate(['/profile']);
        this.registerForm.reset()
      }
    })
  }

}
