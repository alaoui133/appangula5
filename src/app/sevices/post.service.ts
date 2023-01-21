import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { DataService } from './data.service';




@Injectable()
export class PostService extends DataService {




  constructor(http:HttpClient) {
      super("https://jsonplaceholder.typicode.com/posts",http)

   }


}
  

