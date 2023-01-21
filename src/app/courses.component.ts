import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector:'courses',
    templateUrl:'./courses.component.html',
    


})

export class CoursesComponent{

    title='lets goo!';
    image='https://media.licdn.com/dms/image/C4E22AQEtUTPv9CBZdw/feedshare-shrink_1280/0/1672338059650?e=1675296000&v=beta&t=oHGhI72NnuBE-o_T-hlkWJqmnchibJN6bRQA6LLofYs'
    isActive=true;
    emails="abra@gmail.com";
    
    courses:any;

    course={
         titre:'Formation Complete Sur Angular',
         avis:'9.9009',
         participent:136,
         prix:950.38,
         publication: new Date(2022,12,31)  


    };



    constructor(coursesServise:CoursesService){
        this.courses=coursesServise.getCourses();
    }
    
    
    
    getTitle(): string{
        return this.title;
    }

    onclick($event:any){
        $event.stopPropagation();
         console.log("Button Clicked",$event);
    }

    onClickDiv($event:any){
        $event.stopPropagation();
        console.log("div is clicked",$event);
    }
    onKeyUp(){
    
            
     console.log(this.emails);
       
        
    }
    onKeyUp1(email:any){
    
            
        console.log(email.value);
          
           
       }
}