import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Mountain } from '../mountain';
import { MessageService } from '../message-service/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MountainService {
  private mountainsUrl = 'api/mountains';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /* GET montains from the server */
    getMountains (): Observable<Mountain[]> {
      return this.http.get<Mountain[]>(this.mountainsUrl)
        .pipe(
          tap(mountains => this.log(`fetched mountains`)),
          catchError(this.handleError('getMountains', []))
        );
    }

    /** GET mountain by id. Return `undefined` when id not found */
    getMountainNo404<Data>(id: number): Observable<Mountain> {
      const url = `${this.mountainsUrl}/?id=${id}`;
      return this.http.get<Mountain[]>(url)
        .pipe(
          map(mountains => mountains[0]), // returns a {0|1} element array
          tap(m => {
            const outcome = m ? `fetched` : `did not find`;
            this.log(`${outcome} mountain id=${id}`);
          }),
          catchError(this.handleError<Mountain>(`getMountain id=${id}`))
        );
    }

    /** GET mountain by id. Will 404 if id not found */
    getMountain(id: number): Observable<Mountain> {
      const url = `${this.mountainsUrl}/${id}`;
      return this.http.get<Mountain>(url).pipe(
        tap(_ => this.log(`fetched mountain id=${id}`)),
        catchError(this.handleError<Mountain>(`getMountain id=${id}`))
      );
    }

    /* GET mountains whose name contains search term */
    searchMountains(term: string): Observable<Mountain[]> {
      if (!term.trim()) {
        // if not search term, return empty mountain array.
        return of([]);
      }
      return this.http.get<Mountain[]>(`api/mountains/?name=${term}`).pipe(
        tap(_ => this.log(`found mountains matching "${term}"`)),
        catchError(this.handleError<Mountain[]>('searchMountains', []))
      );
    }

    //////// Save methods //////////

    /** POST: add a new mountain to the server */
    addMountain (mountain: Mountain): Observable<Mountain> {
      return this.http.post<Mountain>(this.mountainsUrl, mountain, httpOptions).pipe(
        tap((mountain: Mountain) => this.log(`added mountain w/ id=${mountain.id}`)),
        catchError(this.handleError<Mountain>('addMountain'))
      );
    }

    /** DELETE: delete the mountain from the server */
    deleteMountain (mountain: Mountain | number): Observable<Mountain> {
      const id = typeof mountain === 'number' ? mountain : mountain.id;
      const url = `${this.mountainsUrl}/${id}`;

      return this.http.delete<Mountain>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted mountain id=${id}`)),
        catchError(this.handleError<Mountain>('deleteMountain'))
      );
    }

    /** PUT: update the mountain on the server */
    updateMountain (mountain: Mountain): Observable<any> {
      return this.http.put(this.mountainsUrl, mountain, httpOptions).pipe(
        tap(_ => this.log(`updated mountain id=${mountain.id}`)),
        catchError(this.handleError<any>('updateMountain'))
      );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** Log a MountainService message with the MessageService */
    private log(message: string) {
      this.messageService.add('MountainService: ' + message);
    }
}