import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from '../../services/noteservice/note.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<any>();
  title:any;
  description:any;
  notesId:any;

   constructor(private note:NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    console.log("inside update", this.data)
    this.title=this.data.title;
    this.description = this.data.description;
    this.notesId=this.data.id
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
    this.updatedisplay.emit(event);
  }


}
