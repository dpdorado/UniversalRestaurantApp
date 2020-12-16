import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/auth/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string="";

  constructor(public userService: UsersService, public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {            
      this.userService.setToken(data.data[0].access_token);    
      this.userService.setUser(data.roles);
      this.userService.setUser(data.data[0].roles[0]);      
      if (this.userService.getUser()=="chef"){        
        this.router.navigateByUrl('/component/chef/home');        
      }else if(this.userService.getUser()=="customer"){
        this.router.navigateByUrl('/compenent');
      }            
    },
    error => {
      console.log(error);
      alert("Credenciales incorrectos...!");
    });
  }
}
