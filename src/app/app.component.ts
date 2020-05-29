import { Component } from '@angular/core';
import { WikiService } from './wiki.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages = [];

  constructor(
    private wikiServ: WikiService
  ){}

  title = 'wsearch';

  onTherm(term: string){

    this.wikiServ.search(term).subscribe((response)=>{
        console.log(response)
        this.pages = response;
    })
  }

}
