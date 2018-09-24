import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './profile.component.html'
})
export class UserProfileComponent implements OnInit {
    formGroup: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    constructor(private authService: AuthService, private route: Router) { }
    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern("^[a-zA-Z]+.*")]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern("^[a-zA-Z]+.*")]);
        this.formGroup = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
    updateProfileDetails(formValues) {
        if (this.formGroup.valid) {
            this.authService.updateUserDetails(formValues.firstName, formValues.lastName);
            this.route.navigate(['/launches']);
        }
    }
}