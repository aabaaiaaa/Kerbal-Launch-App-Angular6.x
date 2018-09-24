import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent{

    constructor(private authService:AuthService, private route:Router){}

    username: string;
    password: string;
    mouseOverSubmit;

    login(loginValues:any){
        this.authService.login(loginValues.username, loginValues.password);
        this.route.navigate(['/launches']);
        console.log(this.authService.currentUser);
    }

    cancel(){
        this.route.navigate(['/launches']);
    }
}