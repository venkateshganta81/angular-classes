import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { environment } from "../environments/environment";

@Injectable()
export class LoginService{
    constructor(
        private http : Http
    ){

    }

    ApiUrl = environment.apiUrl;

    login(user){
        console.log(user);
        return this.http.post(this.ApiUrl+"v1/user/login",user);
    }

    currencyData(){
        return this.http.get("http://apilayer.net/api/live?access_key=9a31bbd198a765484a6abfd972567f34")
    }

    getData(userId){
        let headers = new Headers();
        headers.append('token',localStorage.getItem('token'));
        console.log(headers);
        console.log("In service",userId);
        return this.http.post("http://localhost:3500/v1/user/getUserDetails",{headers : headers},userId);
    }


    


    /* Functions */
    /* Library */
    /* FrameWork */

    /* 
        Form Validations    
        Services(API Calls)
        Third party API Integration
        Pipes -- > pipe  ---- > PIPE
        Observables --->
        Lazy Loading ----> 
    */

    /* 
    Services
    http ---> get , post ,put , delete
    data ----> Format
     */
}