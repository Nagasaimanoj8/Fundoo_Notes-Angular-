import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notedata:any
  @Output() messageEvent = new EventEmitter<any>(); 
  archive:boolean=false

  constructor(private note:NoteService, private route:ActivatedRoute,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  isarchive(){
    console.log(this.notedata.id);
    let reqdata= {    
      userId: this.notedata.id
    }

    this.note.archive_note(reqdata).subscribe((res:any)=>{
      console.log(res);
      this.messageEvent.emit("Note is archived");
      this.snackBar.open('archived')
  })
  }
  receiveMessage(event:any){
    console.log(event);
  this.isarchive();
}
}