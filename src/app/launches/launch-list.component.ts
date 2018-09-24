import { Component, OnInit } from "@angular/core";
import { LaunchService } from "./shared/launch.service";
import { ILaunch } from "./shared/ILaunch";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'launch-list',
    template: `
    <div>
        <h1>Launch List</h1>
        <hr>
        <div class="row">
        <div class="col-md-6" *ngFor="let launch of launches;let i = index">
        <launch-list-item [launch]="launch" [i]=i (launchVoteClick)="onLaunchVoteClick($event)" (click)="handleLaunchListItemClick(launch.mission.title)"></launch-list-item>
        </div>
        </div>
    </div>`
})
export class LaunchListComponent implements OnInit {
    constructor(private launchService:LaunchService,private toastrService:ToastrService, private route:ActivatedRoute){}
    ngOnInit(){
        // this.launchService.getLaunches().subscribe(launches => {
        //     this.launches = launches;
        // })
        this.launches = this.route.snapshot.data["launches"]
    }
    launches:ILaunch[]
    onLaunchVoteClick(data) {
        console.log("received:", data);
    }
    handleLaunchListItemClick(launchTitle){
        this.toastrService.showSuccess(launchTitle);
    }
}