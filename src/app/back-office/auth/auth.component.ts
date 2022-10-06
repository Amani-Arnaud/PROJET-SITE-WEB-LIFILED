import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import * as APP_URL from '../../shared/app-links';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginFormData !: FormGroup;

  constructor(
    private setTitle: Title,
    private formbuilder: FormBuilder,
    private adminService: AdminServiceService
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("Login - Admin LIFILED");
    this.loginFormData = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    this.adminService.login().subscribe((result) => {
      const user = result.find((client: any) => {
        console.log("test 0 passed");
        console.log(client);
        if (client.email === this.loginFormData.value.email && client.password === this.loginFormData.value.password) {
          console.log("test 1 passed");
          localStorage.setItem("adminIsLogin", "admin_login");
          this.loginFormData.reset();
          window.location.href = APP_URL.SITE_URL + "lifiled-admin";
          console.log("true");
          return true;
        } else {
          console.log("test 1 failed");

          console.log("false");
          return false;
          
        }
      });
    });
  }

}
