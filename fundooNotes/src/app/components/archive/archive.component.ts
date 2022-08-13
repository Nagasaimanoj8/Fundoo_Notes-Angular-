import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Input() childMessage: any;
  parentMessage:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getarchivenotes()
  }
  getarchivenotes(){
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res);
       this.parentMessage = res
       this.parentMessage.reverse()
       this.parentMessage=this.parentMessage.filter((object:any)=>{
        return object.archive===1;
       })
      })
  }
  receiveMessage(event:any){
    console.log(event);
  this.getarchivenotes();
  }

}
