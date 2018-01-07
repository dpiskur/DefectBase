import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent   
  ],
  exports: [
    BsNavbarComponent
  ]
})

export class CoreModule { }
