import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm!:FormGroup;
  isSubmitted = false;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]], // in here we first add the default value, in this case empty(''), then Validators followed by Validators keyword
      password:['',Validators.required]
    })
  }

  get fc() { // using this function to stop repetitive "loginForm.contains" part
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    alert(`email: ${this.fc.email.value},
    password: ${this.fc.password.value}`);
  }

}
