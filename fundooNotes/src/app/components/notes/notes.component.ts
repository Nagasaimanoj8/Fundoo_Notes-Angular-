import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() changeNoteEvent= new EventEmitter<string>();
  
  parentMessage:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getnotes()
  }
  getnotes(){
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res);
       this.parentMessage = res
       this.parentMessage.reverse();
       this.parentMessage = this.parentMessage.filter((object:any) => {
        return object.trash== false && object.archive == false
       
      })
    })
  }
  receiveMessage($event:any){
    console.log($event);
  this.getnotes();
  }
  updatedIcon($event:any) {
    console.log($event);
    this.getnotes();
  }
  receiveMessagearchive($event:any){
    console.log($event);
    this.getnotes();
  }
  iconRefresh($event:any){
    console.log($event)
    this.getnotes();
  }
  
}
