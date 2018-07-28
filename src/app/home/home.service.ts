import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private headers = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'})};


  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  public post(src: string, obj?: {}): Observable<any> {
    const url = `/api/${src}`;
    return this.http.post<any>(url, obj).pipe(
      tap(_ => console.log(`fetched sucess`)),
      catchError(this.handleError<any>(`error`))
    );
  }

  public get(src): Observable<any[]> {
    const url = `/api/${src}`;
    console.log(url);
    return this.http.get<any>(url)
    .pipe(
      tap(_ => console.log(`请求成功`)),
      catchError(this.handleError<any>(`error`))
    );
  }

  public api(src) {
    return this.get(src);
  }

  public register(nickName, account, pwd) {
    return this.post('register', {nickName, account, pwd});
  }
}
