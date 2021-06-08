import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PessoaService} from "../pessoa.service";
import {Pessoa} from "../pessoa";
import {Contato} from "../contato";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  @Output() updateList = new EventEmitter();
  faPlusCircle = faPlusCircle;
  startDate = new Date(2000, 0, 1);

  id?: number;
  nome: string = '';
  cpf: string = '';
  nascimento: string = '';

  contatos: Contato[] = [];

  constructor(private pessoaService : PessoaService, private _snackBar: MatSnackBar) { }

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
    })).subscribe((x:any)=>{
      if(x) {
        this.updateList.emit();
        this.pessoaService.getPessoas();
        this._snackBar.open("Pessoa Salva com sucesso", "IHA!",
          {
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 5000
          })
      }
    })


    // console.log(this.nome, this.cpf, this.nascimento);
    // console.log(new Date(this.nascimento).toISOString())
  }

}
