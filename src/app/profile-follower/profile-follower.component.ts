import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
  id:any;
  username:any;
  page:any;
  type:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

        //to get dynamic segment followers/:id/username  with subscribe

    /* this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
      this.username=params.get('username');
    }  ) */

   /*  this.route.queryParamMap.subscribe(queryParams=>{
       console.log(queryParams.get('type'));
    } ) */

    //to get dynamic segment data followers/:id/username ** without using subscribe()
    this.id =this.route.snapshot.paramMap.get('id');
    this.username=this.route.snapshot.paramMap.get('username');

    //to get (Queries data) from variable in queriea (?page=1&type=User&var=val)** without using subscribe()

    this.page=this.route.snapshot.queryParamMap.get('page');
    this.type=this.route.snapshot.queryParamMap.get('type');

  }

}
