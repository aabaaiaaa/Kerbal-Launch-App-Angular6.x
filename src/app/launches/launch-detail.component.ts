import { Component, OnInit } from "@angular/core";
import { ILaunch } from "./shared/ILaunch";
import { LaunchService } from "./shared/launch.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./launch-detail.component.html"
})
export class LaunchDetailComponent implements OnInit{
    launch:ILaunch;
    showSpinner:Boolean;
    constructor(private launchService:LaunchService, private activatedRoute:ActivatedRoute){}
    ngOnInit(){
        this.launch = this.launchService.getLaunch(+this.activatedRoute.snapshot.params["id"]);
    }
}