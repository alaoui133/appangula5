import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';





@Injectable()
export class DataService {




  constructor(@Inject(String) private url: string, private http:HttpClient) { 


  }
  


  getAll(){

   return  this.http.get(this.url).pipe(
    catchError(this.handleError)
  );

  }

  
  create(resource:any){
    return this.http.post(this.url,resource).pipe(
      catchError(this.handleError)
    );
  }

  update(resource:any){

    return this.http.put(this.url+'/'+resource.id,resource).pipe(
      catchError(this.handleError)
    );
  }



  delete(resource:any){

    return this.http.delete(this.url+'/'+resource.id).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      // A client-side or network error occurred. Handle it accordingly.
      alert(error.error);
      console.error('An error occurred:', error.error);
    } if(error.status === 404) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      alert(error.error);
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  }

