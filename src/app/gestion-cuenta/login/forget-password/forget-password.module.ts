import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';
import { InsertCodeComponent } from './insert-code/insert-code.component';
import { InsertPasswordComponent } from './insert-password/insert-password.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ForgetPasswordComponent,
    InsertCodeComponent,
    InsertPasswordComponent,
    MessageComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule
  ]
})
export class ForgetPasswordModule { }
