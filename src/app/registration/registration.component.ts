import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm : FormGroup;
  constructor(
    private route : Router
  ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email : new FormControl(null,[Validators.required,Validators.email]),
      mobile : new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required)
    });
  }

  register(){
    console.log(this.registrationForm);
    localStorage.setItem('email' , this.registrationForm.value.email);
    localStorage.setItem('password',this.registrationForm.value.password);
    this.route.navigate(['/login'])
  }

}
