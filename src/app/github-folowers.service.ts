import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './sevices/data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFolowersService extends DataService {

  constructor(http:HttpClient) {
    super("https://api.github.com/users/IDBRAHIMDEV/followers",http);
   }
}
