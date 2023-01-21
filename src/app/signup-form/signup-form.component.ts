import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {UsernameValidator} from './username.validator'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  submit(form:any){
    console.log(form);
    
  }
  f(){
  return this.form.controls
 }
  form= new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(5),UsernameValidator.cannotContainSpace]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])


  })
  
}
