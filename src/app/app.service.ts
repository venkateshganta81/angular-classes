import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class LoginService{
    constructor(
        private http : Http
    ){

    }
    login(user){
        return this.http.post("http://localhost:3500/v1/user/login",user);
    }



    /* 
    Services
    http ---> get , post ,put , delete
    data ----> Format
     */
}