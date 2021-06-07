import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../pessoa.service";
import {Pessoa} from "../pessoa";
import {Contato} from "../contato";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  startDate = new Date(2000, 0, 1);

  id?: number;
  nome: string = '';
  cpf: string = '';
  nascimento: string = '';

  contatos: Contato[] = [];

  constructor(private pessoaService : PessoaService) { }

  ngOnInit(): void {
  }

  addContato(e : Event) {
    e.preventDefault();

    this.contatos.push(<Contato> ({
      nome: '',
      telefone: '',
      email: '',
      }))
  }

  onSubmit() {
    this.pessoaService.putPessoa(<Pessoa>({
      id: this.id,
      nome: this.nome,
      cpf: this.cpf,
      nascimento: this.nascimento ? new Date(this.nascimento).toISOString().replace("Z", "") : "",
      contatos: this.contatos
    })).subscribe()


    // console.log(this.nome, this.cpf, this.nascimento);
    // console.log(new Date(this.nascimento).toISOString())
  }

}
