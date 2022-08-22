import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  colour = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}
  ]
  @Input() notedata:any
    archive:boolean=false
  trash:boolean=false
  @Output() changeNoteEvent = new EventEmitter<string>();
  constructor(private note:NoteService, private route:ActivatedRoute,private snackBar:MatSnackBar) { }

  @Output() displayicons = new EventEmitter<string>();
  ngOnInit(): void {
    let del = this.route.snapshot.component;
    if (del == TrashComponent) {
      this.trash = true;
      console.log(this.notedata);
    }
    if (del == ArchiveComponent) {
      this.archive = true;
      console.log(this.notedata);
    }
  }
  isarchive(){
    console.log(this.notedata.id);
    let reqdata= {    
      userId: this.notedata.id
    }

    this.note.archive_note(reqdata).subscribe((res:any)=>{
      console.log(res);
      this.changeNoteEvent.emit(res);
      this.snackBar.open('archived')
  })
  this.snackBar.open('archived','',{
    duration:1000
  });
  }
 
unarchive(){
  let data = {
    userId: this.notedata.id,
   
  };
  console.log(this.notedata.id);
  this.note.unarchive_note(data).subscribe((res:any)=>{
    console.log( res);
    window.location.reload();
    console.log('unarchived');   
  });
  this.snackBar.open('Note unarchive ' ,'', {
    duration: 3000,
   
  });
}
istrash(){
  console.log(this.notedata.id);
  let data={
    userId: this.notedata.id
  }
  console.log(data)
  this.note.trash_note(data).subscribe((res:any)=>{
    console.log(res);
    this.changeNoteEvent.emit(res);
    this.snackBar.open('Note trashed')
  })
}
untrash(){
  let data={
    userId:this.notedata.id
  }  
  console.log(data);
  this.note.untrash_note(data).subscribe((res:any)=>{
    console.log(res);
  window.location.reload();
    this.snackBar.open('Note untrashed');    
  })
  }
  deleteforever(){
    let data={
      userId:this.notedata.id
    }  
    console.log(data);
    this.note.delete(data).subscribe((res:any)=>{
      console.log(res);
      window.location.reload();
      this.snackBar.open('Note deleted')    
    })

  }
change_colour(note_colour:any){
  console.log('Icons ChangeNoteColor Api Calling..')
  let data={
    userId: this.notedata.id,
    colour: note_colour
  }
  console.log(data)
  this.note.change_note_color(data).subscribe((res:any)=>{
    console.log(res);
    this.changeNoteEvent.emit(res)
  })
  this.snackBar.open('Note color changed','',{
    duration:2000,
  });
}
}
