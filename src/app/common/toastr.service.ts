import { Injectable } from "@angular/core";

declare let toastr:any;

@Injectable()
export class ToastrService{
    showSuccess(message:string,title?){
        console.log("show toastr message:", message);
        toastr.success(message, title);
    }
}