import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  result:any;

  constructor(private note:NoteService,public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getarchivenotes()
  }
  getarchivenotes(){
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res);
       this.result= res
       this.result.reverse()
       this.result=this.result.filter((object:any)=>{
        return object.archive===1;
       })
      })
  }
  updatedIcon(event:any){
  this.getarchivenotes();
  }
}
