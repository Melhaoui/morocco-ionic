import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : any;
  password : any;


  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    //this.router.navigate(['cities']);
    this.fireauth.signInWithEmailAndPassword(this.email, this.password)
    .then((res) => {
      if (res.user) {
        console.log(res);
        // Login Success
        this.router.navigate(['reservation']);
      }
    }).catch((err) => {
      let msg = err.message;
      
      //this.presentAlert("Error", msg);
    })
  }
}
