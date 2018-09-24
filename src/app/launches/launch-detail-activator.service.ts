import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { LaunchService } from "./shared/launch.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LaunchDetailActivatorService implements CanActivate {
    constructor(private launchService: LaunchService, private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot) {
        if(this.launchService.getLaunch(+route.params["id"]) == null){
            this.router.navigate(["/404"]);
        }
        return true;
    }
}