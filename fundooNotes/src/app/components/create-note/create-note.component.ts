import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  isshow=false;
  title:any;
  description:any;
  constructor(private note:NoteService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  show(){
    this.isshow=true;
  }
  close(){
    this.isshow=false;
    console.log(this.title,this.description);
    let data={
      title:this.title,
      description:this.description
    }
    this.note.addnote(data).subscribe((res:any)=>{
      console.log(res);
      this.messageEvent.emit(res)
      this.snackBar.open('Note created')
    })
  }
}
