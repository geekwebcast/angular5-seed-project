import { Component } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {

    constructor(private authService:AuthService){

    }
    login(data){
      debugger;
      let dummy={
        "email": "peter@klaven",
        "password": "cityslicka"
    }
      this.authService.login(dummy).subscribe(resp=>{
      },
      error=>{

      }
    )}
}
