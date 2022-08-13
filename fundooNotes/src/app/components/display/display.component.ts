import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() childMessage: any; 
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() displayArchive = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<any>();

  searchString:any='';
  message:any;
  subscription: any;
  colour:any;
  Grid:any = true;


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
       data:note,
       panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe((result:any)=> {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
    });
  }
  recieveArchiveNote(event:any){
    this.displayArchive.emit(event);
  }
  colourchanged(event:any){
    console.log(event);
    this.changeColorOfNote.emit("colour")
    }
    reloadCurrentPage() {
      window.location.reload();
     }
}
