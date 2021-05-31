import {Component, Input, OnInit} from '@angular/core';
import { Pessoa } from '../pessoa';
import { PESSOAS } from '../mock-pessoas';

@Component({
  selector: 'app-pessoa-item',
  templateUrl: './pessoa-item.component.html',
  styleUrls: ['./pessoa-item.component.css']
})

export class PessoaItemComponent implements OnInit {

  @Input() pessoa ? : Pessoa;

  constructor() { }

  ngOnInit(): void {
  }

}
