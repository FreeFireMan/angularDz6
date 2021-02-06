import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from "./services/user.service";
import {UsersRoutingModule} from "./users-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [UserService]
})
export class UsersModule { }
