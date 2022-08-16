import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from '../../services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit { 
  @Output() updatedisplay = new EventEmitter<any>();
  @Output() changeNoteEvent = new EventEmitter<string>();
  title:any;
  description:any;
  notesId:any;
  colour:any;


   constructor(private note:NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private snackBar:MatSnackBar
  ) {
  }

  ngOnInit(): void {
    console.log("inside update", this.data)
    this.title=this.data.title;
    this.description = this.data.description;
    this.notesId=this.data.id;
    this.colour=this.data.colour;
  } 
  onNoClick(): void {
    this.dialogRef.close();
  }
  close(){
    console.log(this.title,this.description);
    let data={
      'title': this.title,
      'description':this.description,
      'userId':this.notesId
    }
    this.note. update_note(data).subscribe((res:any)=>{
      console.log(res);
      this.updatedisplay.emit(res)
    })
  }
  receiveMessage(event:any){
    console.log(event);
    this.colour=event;
    this.updatedisplay.emit(event);

  }
  colourchanged(event:any){
    console.log(event);
    this.colour=event;
    this.changeNoteEvent.emit(event)
  }
}
