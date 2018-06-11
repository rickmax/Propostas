import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CKEditorModule } from 'ngx-ckeditor';
import { AppComponent } from './app.component';
import { PropostasComponent } from './propostas/propostas.component';


import { routing } from './app.routing';

import { PropostaFormComponent } from './propostas/proposta-form/proposta-form.component';
import { PropostaService } from './propostas/shared/proposta.service';
import { PropostaDetalheComponent } from './propostas/proposta-detalhe/proposta-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    PropostasComponent,
    PropostaFormComponent,
    PropostaDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CKEditorModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [PropostaService],
  bootstrap: [AppComponent]
})
export class AppModule { }