import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ITag} from "../tags/tags.model";
import {catchError} from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }
  getTags():Observable<ITag[]> {
   return this.http.get<ITag[]>('http://localhost:3000/tags')
     .pipe(catchError(this.handleError<ITag[]>('getTags',[])))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    }
  }
}
