import { Component, OnInit } from '@angular/core';
import { GithubFolowersService } from '../github-folowers.service';

@Component({
  selector: 'gethub-folowers',
  templateUrl: './gethub-folowers.component.html',
  styleUrls: ['./gethub-folowers.component.css']
})
export class GethubFolowersComponent implements OnInit {

  followers:any=[{}];

  constructor(private service:GithubFolowersService) { }

  ngOnInit(): void {

    this.service.getAll().subscribe(response=>this.followers=response);
  }

}
