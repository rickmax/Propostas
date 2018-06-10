import { Component, OnInit } from '@angular/core';

import { PropostaService } from '../shared/proposta.service';

import {Proposta} from "../shared/proposta.model";

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-proposta-form',
  templateUrl: './proposta-form.component.html',
  styleUrls: ['./proposta-form.component.css']
})
export class PropostaFormComponent implements OnInit {
  
  nome: string;
  
  proposta: Proposta = new Proposta();

  constructor(

    private propostaService: PropostaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.nome = id ? 'Edit Proposta' : 'Create Proposta';

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

}