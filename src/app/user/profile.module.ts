import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { UserProfileActivatorService } from "./profile-activator.service";

export const userProfileRoutes: Routes = [{
    path: 'profile', component: UserProfileComponent, canActivate: [UserProfileActivatorService]
}, {
    path: 'login', component: LoginComponent
}];

@NgModule({
    declarations: [
        UserProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userProfileRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UserProfileActivatorService
    ]
})
export class UserProfileModule { }

