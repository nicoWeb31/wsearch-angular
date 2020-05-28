import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private httpCli: HttpClient) { }

  search(term: string){
   return this.httpCli.get('https://en.wikipedia.org/w/api.php',{
     params:{
       action:'query',
       format:'json',
       list:'search',
       utf8:'1',
       srsearch: term,
       origin : '*'

     }
   })
  }

}
