import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutes } from './auth.routing';
import { UsersService } from "../services/auth/users.service";


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    ChartsModule,
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  providers: [
    UsersService
  ],
})
export class AuthModule {}

