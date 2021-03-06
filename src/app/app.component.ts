import { Component } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro de pessoa';

  eventsSubject: Subject<void> = new Subject<void>();
  eventsEditPessoa: Subject<number> = new Subject<number>();

  updateList() {
    this.eventsSubject.next();
  }

  editPessoa(pessoaId : number) {
    this.eventsEditPessoa.next(pessoaId);
  }
}
