import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { KerbalAppComponent } from './kerbal-app.component';

import {
  LaunchListComponent,
  LaunchListItemComponent,
  LaunchService,
  LaunchDetailComponent,
  RegisterLaunchComponent,
  LaunchDetailActivatorService,
  LaunchListResolveService
} from './launches/index'

import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Page404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    KerbalAppComponent,
    LaunchListComponent,
    LaunchListItemComponent,
    LaunchDetailComponent,
    RegisterLaunchComponent,
    Page404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LaunchService,
    ToastrService,
    LaunchDetailActivatorService,
    {
      provide: "preventLeavingRegisterLaunchForm",
      useValue: checkRegisterFormIsSafeToLeave
    },
    LaunchListResolveService,
    AuthService
  ],
  bootstrap: [KerbalAppComponent]
})
export class AppModule { }

export function checkRegisterFormIsSafeToLeave(component:RegisterLaunchComponent){
  if(component.isDirty){
    return window.confirm("Are you sure you want to discard any unsaved changes?");
  }
  return true;
}