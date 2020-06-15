import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(public http: HttpClient, public router: Router) {}

  get(busqueda) {
    const URL = `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=803fdd9b8517490d89d8c85ade466b8d`;
    return this.http.get(URL).pipe<any>( resp => resp);
  }
}