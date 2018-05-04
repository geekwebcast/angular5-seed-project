import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    @ViewChild('swalInternet') private swalInternet: SwalComponent;
    constructor(private authService:AuthService,public toastr: ToastsManager, vcr: ViewContainerRef,private router: Router){
        this.toastr.setRootViewContainerRef(vcr);
    }
    login(data){
      let dummy={
        "email": "peter@klavekn",
        "password": "cityslicka"
    }
      this.authService.login(dummy).subscribe(resp=>{
        this.toastr.success('You are awesome!', 'Success!');
        this.router.navigate(['/feature/home']);
      },
      error=>{
        this.toastr.error('This is not good!', 'Oops!');
      }
    )}
}
