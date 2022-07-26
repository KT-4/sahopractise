import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {ComponyModule} from './compony/compony.module'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


import {AuthModule} from '../app/auth/auth.module';
import { ChildeComponent } from './childe/childe.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactivearrayComponent } from './reactivearray/reactivearray.component'

import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { ComponentComponent } from './component/component.component';
import { PersonComponent } from './person/person.component';
import { NotificationComponent } from './notification/notification.component'

import { NotificationService } from './notification.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChildeComponent,
    ParentComponent,
    ReactiveComponent,
    ReactivearrayComponent,
    CustomerComponent,
    ComponentComponent,
    PersonComponent,
    NotificationComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponyModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("Hii this is module...");
  }
 
}