import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() childMessage: any;
  Tresult:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.trash_note()
  }
  trash_note(){
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res);
       this.Tresult = res
       this.Tresult.reverse()
       this.Tresult=this.Tresult.filter((object:any)=>{
        return object.trash===1;
       })
      })
  }
  receiveMessage(event:any){
    console.log(event);
  this.trash_note();
  }
  }
