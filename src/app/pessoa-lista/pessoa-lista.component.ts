import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  pessoas : Observable<Pessoa[]> = [];

  getPessoas() : void {
    this.pessoas = this.pessoaService.getPessoas()
  }

  constructor(private pessoaService : PessoaService) { }

  ngOnInit(): void {
    this.getPessoas();
  }

}
