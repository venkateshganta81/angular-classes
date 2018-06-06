import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email : any;
  public password : any ;
  public userDetails : any;
  public loginggedInUserDetails : any;
  public someText = ['Hi','Hello',"How","are","you"];
  public selectedCurrency : any;
  constructor(
    private route : Router,
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.selectedCurrency = "INR";
  }

  login(){
    if(!this.email){
      alert("Please Provide Email");
    }else if(!this.password){
      alert("Please Provide Password");
    }else{
      /* if(this.email == localStorage.getItem('email') && this.password == localStorage.getItem('password')){
        this.route.navigate(['/profile'])
      }else{
        alert("Invalid Credentials")
      } */
      this.userDetails ={
        email : this.email,
        password : this.password
      }
      this.loginService.login(this.userDetails)
        .subscribe(
          (response)=> {
            console.log(response.json())
            this.loginggedInUserDetails = response.json();
            console.log(this.loginggedInUserDetails);
            localStorage.setItem('token', this.loginggedInUserDetails.userToken);
            this.loginggedInUserDetails = this.loginggedInUserDetails.user;
            console.log(this.loginggedInUserDetails);
           /*  this.getDetails(); */
          }
        ) 
    }

  }
  /* getDetails(){
    this.loginService.getData(this.loginggedInUserDetails._id)
        .subscribe(
          (response)=>{
            console.log(response.json());
          }
        )
  } */

}
