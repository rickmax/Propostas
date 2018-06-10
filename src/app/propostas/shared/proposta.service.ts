import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {map} from 'rxjs/operators';
// import {do} from 'rxjs/operators';
// import {catch} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PropostaService {

  private url: string = "http://localhost:3000/propostas";

  constructor(private http: Http) { }

  getPropostas(){
    return this.http.get(this.url)
    .pipe(map(res => res.json()))
  }

  getProposta(id){
    return this.http.get(this.url + '/' + id)
      .pipe(map(res => res.json()))
  }

  addProposta(proposta){
    return this.http.post(this.url, {'proposta': proposta})
      .pipe(map(res => res.json()))
  }

  updateProposta(proposta){
    return this.http.put(this.url + '/' + proposta.id, {'proposta': proposta})
      .pipe(map(res => res.json()))
  }

  deleteProposta(id){
    return this.http.delete(this.url + '/' + id)
      .pipe(map(
        res => res.json(),
        err => console.log('Error: ',err)
      ))
  }

}