import { Component, OnInit, NgModule } from '@angular/core';

import { PropostaService } from '../shared/proposta.service';
import {Proposta} from "../shared/proposta.model";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { DataserviceService } from '../shared/dataservice.service';
import {BrowserModule} from '@angular/platform-browser'
import { Estado } from '../shared/estado.model';
import { Cidade } from '../shared/cidade.model';

@Component({
  selector: 'app-proposta-form',
  templateUrl: './proposta-form.component.html',
  styleUrls: ['./proposta-form.component.css'],
  providers : [DataserviceService]
})

export class PropostaFormComponent implements OnInit {
  
  estadoSelecionado : Estado = new Estado(0,'Minas Gerais') ;
  estados : Estado[];
  cidades : Cidade[];

  nome: string;
  botao: string;
  
  proposta: Proposta = new Proposta();

  constructor(
      private _dataService: DataserviceService,
      private propostaService: PropostaService,
      private router: Router,
      private route: ActivatedRoute,
      private location: Location
    ) {
    this.estados = this._dataService.getEstados();
  }

  onSelect(id) {
    this.cidades = this._dataService.getCidades().filter((item)=> item.estado_id == id);
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.nome = id ? 'Editar Proposta' : 'Criar Proposta';
      this.botao = id ? 'Atualizar' : 'Criar';

      if (!id)
        return;

      this.propostaService.getProposta(id)
        .subscribe(
          proposta => this.proposta = proposta,
          response => {});
    });
  }

  save() {
    var result;

    if (this.proposta.id){
      result = this.propostaService.updateProposta(this.proposta);
    } else {
      result = this.propostaService.addProposta(this.proposta);
    }

    result.subscribe(data => this.router.navigate(['/']));
  }

  public goBack() {
    this.location.back();
  }

  public showFieldError(field): boolean{
    return field.invalid && ( field.touched || field.dirty );
  }

}