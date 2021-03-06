import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UserProfileActivatorService implements CanActivate{
    constructor(private authService:AuthService, private route:Router){}
    canActivate(){
        if(this.authService.isAuthenticated()) return true;
        
        this.route.navigate(['/user/login']);
        return false;
    }
}