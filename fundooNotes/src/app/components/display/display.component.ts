import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() childMessage: any; 
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() updatedisplay = new EventEmitter<string>();
  

  searchString:any=' ';
  message:any;
  subscription: any;
  colour:any;
  Grid:any = true;


  constructor(private note:NoteService, public dialog: MatDialog, private data:DataService) {}

  ngOnInit(): void {
    this.data.currentView.subscribe((flag)=>{
      this.Grid=flag
      console.log(this.Grid)
    })
    this.subscription = this.data.currentMessage.subscribe((message: any) => {this.message = message;
      console.log(message);
    })

  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width:'fit-content',
      data:note,
       panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe((result:any)=> {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
    });
  }
  recieveArchiveNote(event:any){
    this.changeNoteEvent.emit(event);
  }
  iconRefresh($event:any){
    console.log($event);
    this.colour=$event;
    this.changeNoteEvent.emit($event)
    }
    
         
}
