import {Component, Input, OnInit} from '@angular/core';
import {Pessoa} from "../pessoa";
import {PessoaService} from "../pessoa.service";
import {MatTableDataSource} from "@angular/material/table";
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-pessoa-lista-paginada',
  templateUrl: './pessoa-lista-paginada.component.html',
  styleUrls: ['./pessoa-lista-paginada.component.css']
})

export class PessoaListaPaginadaComponent implements OnInit {
  @Input() events: Observable<void> = new Observable();
  private eventsSubscription : Subscription = new Subscription();

  faTrash = faTrash;
  faPencilAlt = faPencilAlt;
  displayedColumns: string[] = ['nome', 'cpf', 'nascimento', 'actions'];
  dataSource = new MatTableDataSource<Pessoa>([]);

  getPessoas() : void {
    this.pessoaService.getPessoas().subscribe(pessoas => {
        this.dataSource = new MatTableDataSource<Pessoa>(pessoas.content)
      });
  }

  constructor(private pessoaService : PessoaService) {
  }

  ngOnInit(): void {
    this.getPessoas();
    this.eventsSubscription = this.events.subscribe(() => this.getPessoas());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  onDelete(pessoa: Pessoa) {
    console.log("deletando " + pessoa.nome);
    this.pessoaService.deletePessoa(pessoa).subscribe(() => this.getPessoas());
  }

  onEdit(pessoa: Pessoa) {
    console.log("deletando " + pessoa.nome);
    this.pessoaService.deletePessoa(pessoa).subscribe(() => this.getPessoas());
  }
}
