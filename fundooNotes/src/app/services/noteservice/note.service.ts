import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
token:any;
  constructor(private httpservice:HttpService) { 
  this.token=localStorage.getItem('token')
  }
  addnote(data:any){
    console.log(this.token);
      let header={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+this.token
        })
    }
    return this.httpservice.postservice('http://127.0.0.1:8000/api/addToNotes',data,true,header)
  }
  getallnotes(){
    console.log(this.token);
      let header={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+this.token
        })
    }
    return this.httpservice.getservice('http://127.0.0.1:8000/api/show',true,header)
  }
  update_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
      return this.httpservice.postservice('notes/updateNotes', data, true, header)
  }
}
