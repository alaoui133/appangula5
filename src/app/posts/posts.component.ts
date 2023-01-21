import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../sevices/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any=[];
  post:any={
    "userId":1,
    "id":1,
    "title":" ",
    "body":" "
  }
  status=true;
  constructor( private postService:PostService) { 

   
  }

  ngOnInit(): void {

   this.getPosts();

  }
  getPosts(){
    this.postService.getAll()
    .subscribe(response=>{
      this.posts=response;
    
    },error=>{
      alert(error);
      console.log(error);
    }
    
    );
    return this.posts;
  }
   
  createPosts(){
    // add method API
    this.postService.create(this.post)
    .subscribe(response=>{
        // this.post=response;
        this.posts.unshift(this.post);
        this.post={
          "userId":0,
         "id":0,
         "title":"",
         "body":""

        };
    },error=>{
      alert(error);
    });
  }

  editPosts(post:any){

    this.post=post;
    this.status=false;



  }


  updatePosts(){

    this.postService.update(this.post)
    .subscribe(respnse=>{
      this.post={
        "userId":0,
        "id":0,
        "title":"",
        "body":""
  
      };
    },error=>{
      console.log(error);
    });
    
    this.status=true;

    
  }
  deletePosts(post:any){
    this.postService.delete(post)
    .subscribe(response=>{
      let index= this.posts.indexOf(post);
      this.posts.splice(index,1);

    },error=>{
      alert(error);
    });

  }

}
