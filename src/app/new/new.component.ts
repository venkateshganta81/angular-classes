import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'new-component',
    templateUrl : 'new.component.html',
    styleUrls : ["new.component.css"]
})

export class NewLearning implements OnInit {
    public display : any = [];
    public dynamicStyle;

    ngOnInit(){
       this.display = [{
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
       }] 
    }

    getHeight(){
         
        return {
            'height' : window.innerHeight + 'px',
            'background-color' : 'red'
        } ;
    }

    }