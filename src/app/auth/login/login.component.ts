import { Component, OnInit } from '@angular/core';
import { ILoginForm } from '../../interface/ILoginForm.interface';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';
import { LoginResult } from '../../interface/Login.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  loginForm: ILoginForm= {
      dni: '',
      password: ''
    }
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.loginService.postLogin(this.loginForm).subscribe(
      (data:LoginResult)=>{
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
       sessionStorage.setItem('x-token',data.token);
       this.router.navigate(['/admin/usuario'])
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }
}
