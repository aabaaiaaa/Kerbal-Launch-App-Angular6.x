import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { LaunchService } from "./shared/launch.service";
import { map } from "rxjs/operators";

@Injectable()
export class LaunchListResolveService implements Resolve<any>{
    constructor(private launchService:LaunchService){

    }
    resolve() {
        return this.launchService.getLaunches().pipe(map(data => data));
    }
}