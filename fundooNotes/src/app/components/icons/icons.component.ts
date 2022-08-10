import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() userId:any
  @Output() archivenote = new EventEmitter<any>();
  archive:boolean=false;

  constructor(private note:NoteService,private route:ActivatedRoute,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  isarchive(){
    
      console.log('Icons ArchiveNote Api Calling..')
      let data={
        userId:[this.userId],
        archive: 1
      }
      console.log(data,this.userId)
      this.note.archive_note(data).subscribe((res:any)=>{
        console.log(res)
        this.archivenote.emit(res)
        this.snackBar.open('Note Archived')
      })
  }  
  
}
