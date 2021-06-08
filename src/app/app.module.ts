import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaItemComponent } from './pessoa-item/pessoa-item.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from "@angular/material/grid-list";
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { PessoaListaPaginadaComponent } from './pessoa-lista-paginada/pessoa-lista-paginada.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import {MatDividerModule} from "@angular/material/divider";
import { MatSnackBarModule } from '@angular/material/snack-bar';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    PessoaItemComponent,
    PessoaListaComponent,
    MessagesComponent,
    EditarPessoaComponent,
    PessoaListaPaginadaComponent,
    EditarContatoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
