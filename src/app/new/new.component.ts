import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'new-component',
    templateUrl : 'new.component.html',
    styleUrls : ["new.component.css"]
})

export class NewLearning implements OnInit {
    public display : any = [];

    ngOnInit(){
       this.display = [{
           name : 'nagesh',
            age :22
       },{
           name : 'adarsh',
           age : 30
       },{
           name : '',
           age : 25
       }] 
    }

    }