import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  parentMessage:any;
  result:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.display_archive()
  }
  display_archive(){
    this.note.get_archive_note().subscribe((res:any)=>{
      console.log(res);
      this.parentMessage = res
    })
  }
  recieveMessage(event:any){
    console.log(event)
    this.display_archive()
  }

}
