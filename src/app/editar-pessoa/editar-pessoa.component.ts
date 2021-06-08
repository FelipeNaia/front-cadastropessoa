import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {PessoaService} from "../pessoa.service";
import {Pessoa} from "../pessoa";
import {Contato} from "../contato";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable, Subscription} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  @Output() updateList = new EventEmitter();
  @Input() events: Observable<number> = new Observable();
  private eventsSubscription : Subscription = new Subscription();

  faPlusCircle = faPlusCircle;
  startDate = new Date(2000, 0, 1);
  dateFormControl : FormControl = new FormControl({value: '', disabled: true});

  pessoa : Pessoa;

  constructor(private pessoaService : PessoaService, private _snackBar: MatSnackBar) {
    this.pessoa = EditarPessoaComponent.getEmptyPerson();
  }

  static getEmptyPerson(): Pessoa {
    return <Pessoa>({
      nome: '',
      cpf: '',
      nascimento: '',
      contatos: []
    })
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((pessoaId: number) => this.pessoaService.getPessoa(pessoaId).subscribe(
      (pessoa) => {
        this.pessoa = pessoa;
        this.dateFormControl.setValue(new Date(pessoa.nascimento));
      }
    ));
  }

  addContato(e : Event) {
    e.preventDefault();
    this.pessoa.contatos.push(<Contato> ({
      nome: '',
      telefone: '',
      email: '',
      }))
  }

  onSubmit() {
    this.pessoa.nascimento = this.dateFormControl.value ? this.dateFormControl.value.toISOString().replace("Z", "") : "";
    this.pessoaService.putPessoa(this.pessoa).subscribe((x:any)=>{
      if(x) {
        this.updateList.emit();
        this.pessoa = EditarPessoaComponent.getEmptyPerson();
        this.dateFormControl.setValue(null);
        this._snackBar.open("Pessoa Salva com sucesso", "IHA!",
          {
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 5000
          })
      }
    })
  }

}
