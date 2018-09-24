import { ILaunch } from "./ILaunch";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class LaunchService{
    registerNewLaunch(newLaunch: ILaunch) {
        newLaunch.id = Math.random() * 1000;
        launches.push(newLaunch);
    }
    
    getLaunches(): Observable<ILaunch[]> {
        //return launches;
        let subject = new Subject<ILaunch[]>();
        setTimeout(() => {
            subject.next(launches);
            subject.complete();
        }, 200);
        return subject;
    }

    getLaunch(id:number){
        return launches.find(launch => launch.id === id);
    }

}

const launches: Array<ILaunch> = [{
    id: 1,
    imageUrl: '/assets/images/launches/heavy-rocket.jpg',
    rocket: {
        architect: 'Jeb',
        numberOfParts: 300,
        weightKg: 50000,
        successfulFlights: 0,
        lostFlights: 0
    },
    crew: [
        "Jeb",
        "Jeff",
        "Bob"
    ],
    date: new Date(2018, 3, 25, 11),
    flightTimeSeconds: 86000,
    launchPad: "KSP HQ",
    mission: {
        title: "Heavy Payload",
        notes: "To travel into orbit with a very heavy payload"
    }
}, {
    id: 2,
    imageUrl: '/assets/images/launches/Mun01.jpg',
    rocket: {
        architect: 'Bob',
        numberOfParts: 30,
        weightKg: 5000,
        successfulFlights: 0,
        lostFlights: 0
    },
    crew: [
        "Bob"
    ],
    date: new Date(2018, 5, 20, 9),
    flightTimeSeconds: 16000,
    launchPad: "KSP HQ",
    mission: {
        title: "Mun Landing",
        notes: "Travel out of Kerbin orbit and land on the Mun"
    }
}, {
    id: 3,
    imageUrl: '/assets/images/launches/shuttle-rocket.jpg',
    rocket: {
        architect: 'Jeff',
        numberOfParts: 200,
        weightKg: 35000,
        successfulFlights: 0,
        lostFlights: 0
    },
    crew: [
        "Bob"
    ],
    date: new Date(2018, 7, 15, 15),
    flightTimeSeconds: 67000,
    launchPad: "KSP HQ",
    mission: {
        title: "Low Kerbin Orbit",
        notes: "Test shuttle flight in low Kerbin orbit"
    }
}, {
    id: 4,
    imageUrl: '/assets/images/launches/mun-minmus-rocket.png',
    rocket: {
        architect: 'Jeff',
        numberOfParts: 250,
        weightKg: 45000,
        successfulFlights: 0,
        lostFlights: 0
    },
    crew: [
        "Jeb"
    ],
    date: new Date(2018, 8, 1, 14),
    flightTimeSeconds: 107000,
    launchPad: "KSP HQ",
    mission: {
        title: "Mun/Minmus Flight"
    }
}]