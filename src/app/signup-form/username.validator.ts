import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator{
    constructor(){
        
    }

  static cannotContainSpace(control:AbstractControl ):any{

    if ((control.value as string).indexOf(' ')>=0) {
        
        return{
            cannotContainSpace:true
        }
        return null
    }



}



}