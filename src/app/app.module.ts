import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GrowthComponent } from './services/growthConsulting/growthConsulting.component';
import { ServicesComponent } from './services/services.component';
import { HomePageComponent } from './home/home.component';
import { NewLearning } from './new/new.component';



const router : Routes = [
  { path : 'home' , component : HomePageComponent},
  { path : '' , redirectTo:'/home' , pathMatch:'full' },
  { path : 'services' , component : ServicesComponent , children :[
    { path : '' , redirectTo: '/services/growth-consulting' , pathMatch:'full'},
    { path : 'growth-consulting' , component : GrowthComponent }
  ] },
  { path : 'new' , component : NewLearning }
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GrowthComponent,
    ServicesComponent,
    HomePageComponent,
    NewLearning
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
