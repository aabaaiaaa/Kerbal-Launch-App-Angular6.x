import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ILaunch } from "./shared/ILaunch";

@Component({
    selector: 'launch-list-item',
    templateUrl: "launch-list-item.component.html",
    styles: [`
        .launch-list-item {
            min-height: 500px;
        }
        .launch-list-item img {
            max-height: 230px;
            margin-left: auto;
            margin-right: auto;
        }
    `]
})
export class LaunchListItemComponent {
    @Input()launch: ILaunch
    @Input()i: string
    @Output()launchVoteClick = new EventEmitter()
    
    totalVotes: number = Math.ceil(Math.random() * 6)
    
    vote(){
        this.totalVotes++;
        this.launchVoteClick.emit('vote');
    }
    countOfVotes():Array<number>{
        return new Array(this.totalVotes).map((v, i) => {return i;});
    }
    
    shortTimeThreshold:number = 30000;
    highTimeThreshold: number = 70000;
    getFlightTimeIcon(){
        if(this.launch.flightTimeSeconds < this.shortTimeThreshold) return [1];
        if(this.launch.flightTimeSeconds > this.highTimeThreshold) return [1,1,1];
        return [1,1];
    }
}