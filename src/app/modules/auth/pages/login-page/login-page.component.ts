import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    // this.authService.sendCredentials(email, password)
    //   //TODO: 200 <400
    //   .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
    //     console.log('Session iniciada correcta', responseOk);
    //     const { tokenSession, data } = responseOk
    //     this.cookie.set('token', tokenSession, 4, '/') //TODO:📌📌📌📌
    //     this.router.navigate(['/', 'tracks'])
    //   },
    //     err => {//TODO error 400>=
    //       this.errorSession = true
    //       console.log('⚠⚠⚠⚠Ocurrio error con tu email o password');
    //     })

  }

}
