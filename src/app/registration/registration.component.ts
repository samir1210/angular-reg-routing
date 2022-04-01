import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registerForm: FormGroup;

  constructor(
    private authService: AppService
  ) { }


  ngOnInit(): void {
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
        this.registerForm.reset()
      }
    })
  }

}
