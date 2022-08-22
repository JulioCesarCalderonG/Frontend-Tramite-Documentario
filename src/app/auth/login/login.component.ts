import { Component, OnInit } from '@angular/core';
import { ILoginForm } from '../../interface/ILoginForm.interface';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';
import { LoginResult } from '../../interface/Login.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private loginService: LoginService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login(){
    this.loginService.postLogin(this.loginForm).subscribe(
      (data:LoginResult)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
       sessionStorage.setItem('x-token',data.token);
       sessionStorage.setItem('carga','0');
       sessionStorage.setItem('area',`${data.userarea.idArea}`);
       sessionStorage.setItem('idUsuario',`${data.userarea.Usuario.id}`);
       sessionStorage.setItem('usuario',`${data.userarea.Usuario.nombre} ${data.userarea.Usuario.apellido}`);
       if (data.userarea.Usuario.Cargo.nombre==='DIRECTOR') {
        this.router.navigate(['/director']);
       }
       else if (data.userarea.Usuario.Cargo.nombre==="SECRETARIA") {
        this.router.navigate(['/secretaria']);
       }
       
      },
      (error)=>{
        this.toastr.error(error.error.msg,'Datos Incorrectos');
      }
    )
  }
}
