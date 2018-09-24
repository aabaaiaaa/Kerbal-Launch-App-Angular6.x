import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LaunchService } from "./shared/launch.service";
import { ILaunch, Rocket } from "./shared/ILaunch";

@Component({
    templateUrl: "./register-launch.component.html"
})
export class RegisterLaunchComponent implements OnInit {
    isDirty: boolean = true;
    launch: { mission: { title: string; notes: string; }; };
    constructor(private routerService: Router, private launchService: LaunchService) { }
    ngOnInit() {
        this.launch = {
            mission: {
                title: "editing title",
                notes: "editing notes"
            }
        }
    }
    registerNewLaunch(formValues: ILaunch) {
        formValues.crew = ["Bob"];
        formValues.date = new Date();
        formValues.flightTimeSeconds = 10000;
        formValues.imageUrl = "/assets/images/launches/heavy-rocket.jpg";
        formValues.launchPad = "Testing Launch Pad";
        formValues.rocket = new Rocket();
        formValues.rocket.architect = "Bob";
        formValues.rocket.lostFlights = 0;
        formValues.rocket.numberOfParts = 1;
        formValues.rocket.successfulFlights = 0;
        formValues.rocket.weightKg = 1;

        this.launchService.registerNewLaunch(formValues);
        this.isDirty = false;
        this.routerService.navigate(["/launches"]);
    }
    cancel() {
        this.routerService.navigate(["/launches"]);
    }
}