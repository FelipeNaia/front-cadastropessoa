import { Injectable } from '@angular/core';
import {Pessoa} from "./pessoa";
import {PESSOAS} from "./mock-pessoas";
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoaUrl = "/pessoa";

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPessoas() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.pessoaUrl)
      .pipe(
        catchError(this.handleError<Pessoa[]>('getHeroes', []))
      );
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }
}