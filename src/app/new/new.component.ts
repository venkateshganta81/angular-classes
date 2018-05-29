import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2'
import { LoginService } from '../app.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({
    selector: 'new-component',
    templateUrl: 'new.component.html',
    styleUrls: ["new.component.css"]
})

export class NewLearning implements OnInit {
    public items: any = [];
    public dynamicStyle;
    public imageUrl : any =[];
    public assignedImage : any;
    public assign : boolean = true;
    public exampleBinding : any;
    public email : any;
    public password : any;
    public userDetails;
    public user;

    loginForm : FormGroup;

    constructor(
        private loginService : LoginService,
        private route : Router
    ){}

    validationAlert(text,type){
        Swal({
            title: 'Login',
            text: text,
            type: type,
            showConfirmButton: false,
            timer : 1500
          })
    }

    ngOnInit() {
        /* this.display = [{
         name : 'adarsh',
         age : 30,
         isAged : 'aged'
     },{
            name : 'nagesh',
             age :22,
             isAged : 'notAged'
        },{
            name : '',
            age : 25,
            isAged : 'notAged'
        }]  */
        this.imageUrl = ["./assets/images/ai-img1.png","./assets/images/ai-img2.png"];
        this.assignedImage = this.imageUrl[0];
        this.loginForm = new FormGroup({
            email : new FormControl(null,[Validators.required,Validators.email]),
            password : new FormControl(null,Validators.required)
        })
        this.items = [
            {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "ppu": 0.55,
                "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" },
                                { "id": "1003", "type": "Blueberry" },
                                { "id": "1004", "type": "Devil's Food" }
                            ]
                    },
                "topping":
                    [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5005", "type": "Sugar" },
                        { "id": "5007", "type": "Powdered Sugar" },
                        { "id": "5006", "type": "Chocolate with Sprinkles" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                    ]
            },
            {
                "id": "0002",
                "type": "donut",
                "name": "Raised",
                "ppu": 0.55,
                "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" }
                            ]
                    },
                "topping":
                    [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5005", "type": "Sugar" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                    ]
            },
            {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "ppu": 0.55,
                "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                "topping":
                    [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                    ]
            }
        ]
    }



    clickFunction(){
        console.log("You clicked it");
        this.assign ? this.assignedImage = this.imageUrl[0] : this.assignedImage = this.imageUrl[1]
        this.assign = !this.assign;
    }


    
    

    getHeight() {
        return {
            'height': window.innerHeight + 'px',
            'background-color': 'red'
        };
    }

    /* login(){
        if(!this.email){
            this.validationAlert("Please Enter Email Address" , 'error')
        }else if(!this.password){
            this.validationAlert("Please Enter password" , 'error')
        }else{
            this.userDetails = {
                email : this.email,
                password : this.password
            }
            this.loginService.login(this.userDetails)
                .subscribe(
                    (response) => {
                        console.log(response.json());
                        this.user = response.json();
                        if(this.user.status){
                            this.validationAlert( this.user.message , 'success' )
                        }else{
                            this.validationAlert( this.user.message , 'error' )
                        }
                    }
                )
        }
    } */

    login(){
        if(this.loginForm.valid){
            this.loginService.login(this.loginForm.value)
                .subscribe((loginResponse)=>{
                    
                    this.user = loginResponse.json();
                    if(this.user.status){
                        this.route.navigate(['/user/dashboard']);
                    }
                })

        }else{

        }
        console.log(this.loginForm);
    }

}