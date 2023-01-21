import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appangular5';
  courses=['database','firebase','laravel','react'];
  viewCourses='laravel';
  
 
 body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis sem in mattis ultrices. Nam vitae rutrum leo, sit amet rutrum ex. Mauris sed mi pharetra, maximus risus sit amet, suscipit sem. Nam convallis aliquet nulla a faucibus. Curabitur lobortis libero at tortor accumsan, non tempor ante feugiat. Donec tempor nunc pharetra, consectetur mi sit amet, dapibus tellus. Nunc in aliquet libero. Curabitur massa neque, vulputate vel nulla molestie, feugiat efficitur nisl. Nullam aliquam finibus lacus. Aliquam ullamcorper, lectus viverra condimentum lobortis, orci lectus fringilla quam, et lacinia mi nunc ut dolor';

  post={
    title:'loream ipsum',
    isfavorite: true



  }
  modeles=[
      {id:1 , title: "laravel"},
      {id:2 , title: "angular"}
     
    ]

  onFavoriteChange(){

    console.log('favorite Changed')
  }
  addCourse(){

    this.modeles.push({id:6 , title:"sql"});
  }

  removeCourse(course:any){

    let index= this.modeles.indexOf(course);
    this.modeles.splice(index,1);
  }

  editCourse(course:any){
   
    course.title="Updated";


  }

  loadCourses(){
   this.modeles=[
      {id:1 , title: "laravel"},
      {id:2 , title: "angular"},
      {id:3 , title: "react"},
      {id:4 , title: "nodeJs"},
      {id:5 , title: "asp.net"},
    ]
  }
  trackModel(index:any,course:any){
    return course ? course.id : undefined;
  }

}

