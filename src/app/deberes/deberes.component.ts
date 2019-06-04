import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deberes',
  templateUrl: './deberes.component.html',
  styleUrls: ['./deberes.component.css']
})
export class DeberesComponent implements OnInit {

 title = 'app';
  my_notes = [

  ];
  note = {id:null, title:null, description:null};
  show_form = false;
  addNote(){
  	this.show_form = true;
  }
  cancel(){
  	this.show_form = false;
  }
  createNote(){
  	this.note.id = Date.now();
  	this.my_notes.push(this.note);
  	this.show_form = false;
  	this.note = {id:null, title:null, description:null};
  }
 deleteNote(index){

  this.my_notes.splice(index, 1); 

  }
  
  constructor() { }

  ngOnInit() {
  	console.log("cargado");
  }

}
