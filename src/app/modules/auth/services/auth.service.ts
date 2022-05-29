import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private readonly URL = environment.api
  constructor() { }

  sendCredentials(email: string, password: string): void {
    const body = {
      email,
      password
    }
    //return this.http.post(`${this.URL}/auth/login`, body)
  }

  suma(a: number, b: number): number {
    return a + b
  }
}
