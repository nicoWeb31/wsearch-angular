import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();

  term = '';



  constructor() { }

  ngOnInit(): void {
  }

  onFormSumit(e: any){
    e.preventDefault();
    console.log(this.term);
    //send to parent
    this.submitted.emit(this.term)
  }

}
