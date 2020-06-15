import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'news-app';
  busqueda = '';
  articles = [];

  constructor( private appService: AppService){

  }

search(){
  this.appService.get(this.busqueda).subscribe(
    response => {
      this.articles = response.articles;
    }
  );
}

back(){
  this.articles = [];
  this.busqueda = "";
}

open(url){
  window.open(url);
}



}
