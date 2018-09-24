export interface ILaunch{
    id:number
    imageUrl:string
    rocket:Rocket
    crew:Array<string>
    date:Date
    flightTimeSeconds:number
    launchPad:string
    mission:Mission
}

export interface Mission {
    title:string;
    notes?:string;
}

export class Rocket {
    architect:string;
    numberOfParts:number;
    weightKg:number;
    successfulFlights:number;
    lostFlights:number;
}