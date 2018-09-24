import { LaunchListComponent } from "./launches/launch-list.component";
import { Routes } from "@angular/router";
import { LaunchDetailComponent } from "./launches/launch-detail.component";
import { RegisterLaunchComponent } from "./launches/register-launch.component";
import { LaunchDetailActivatorService } from "./launches/launch-detail-activator.service";
import { Page404Component } from "./errors/404.component";
import { LaunchListResolveService } from "./launches/launch-list-resolver.service";

export const appRoutes: Routes = [
    { path: "404", component: Page404Component },
    { path: "launches/register", component: RegisterLaunchComponent, canDeactivate: ["preventLeavingRegisterLaunchForm"] },
    {
        path: "launches", component: LaunchListComponent, resolve: {
            launches: LaunchListResolveService
        }
    },
    { path: "launches/:id", component: LaunchDetailComponent, canActivate: [LaunchDetailActivatorService] },
    { path: "", redirectTo: "launches", pathMatch: "full" },
    { path: "user", loadChildren: "./user/profile.module#UserProfileModule" }
];