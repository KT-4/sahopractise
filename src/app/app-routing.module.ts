import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildeComponent } from './childe/childe.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactivearrayComponent } from './reactivearray/reactivearray.component';

const routes: Routes = [
  // {path:'header',component:HeaderComponent},
  // {path:'home',component:HomeComponent},
  // {path:'compony',loadChildren:()=>import('./compony/compony.module').then(m => m.ComponyModule)}
      {path:'child',component:ChildeComponent},
      {path:'reactive',component:ReactiveComponent},
      {path:'reactiveaaray',component:ReactivearrayComponent},
      {path:'customer',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
