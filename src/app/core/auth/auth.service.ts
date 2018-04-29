import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {

  }
  login(loginData) {
    debugger;
    return this.httpClient.post("login", loginData);
  }
}
