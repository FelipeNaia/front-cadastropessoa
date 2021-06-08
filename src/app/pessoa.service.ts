import { Injectable } from '@angular/core';
import {Pessoa} from "./pessoa";
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {PessoaResponse} from "./pessoaResponse";
import {MatSnackBar} from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoaList = "/api/pessoa/lista?page=0&size=99";
  private baseUrl = "/api/pessoa/";

  private log(message: string) {
    // this.messageService.add(`PessoaService: ${message}`);
    this._snackBar.open(message, "OK",
      {
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 5000
      })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error.error.message); // log to console instead
      this.log(error.error.message); // log to console instead
      return of(result as T);
    };
  }

  getPessoas() : Observable<PessoaResponse> {
    return this.http.get<PessoaResponse>(this.pessoaList)
      .pipe(
        catchError(this.handleError<PessoaResponse>('getPessoas'))
      );
  }

  getPessoa(pessoaId : number) : Observable<Pessoa> {
    return this.http.get<Pessoa>(this.baseUrl + pessoaId)
      .pipe(
        catchError(this.handleError<Pessoa>('getPessoa'))
      );
  }

  deletePessoa(pessoa : Pessoa) : Observable<void> {
    console.log(this.baseUrl + pessoa.id);
    return this.http.delete<void>(this.baseUrl + pessoa.id);
  }

  putPessoa(pessoa : Pessoa) : any {
    return this.http.put<Pessoa>(this.baseUrl, pessoa, httpOptions).pipe(
      catchError(this.handleError<PessoaResponse>('putPessoa'))
    );
  }

  constructor(private messageService: MessageService, private http: HttpClient, private _snackBar: MatSnackBar) { }
}
