import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    updateUserDetails(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
    currentUser:IUser;
    login(username:string, password:string){
        this.currentUser = {
            username: "test",
            firstName: "jo",
            lastName: "smith"
        };
    }

    isAuthenticated = () => !!this.currentUser
}