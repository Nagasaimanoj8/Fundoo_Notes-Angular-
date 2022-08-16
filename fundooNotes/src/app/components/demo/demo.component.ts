import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit(): void {
  }

 submit(){
  let data={
    email:'nagasaimanoj',
    password:'Jonamiasagan'
  }
  this.user.signin(data).subscribe((res:any)=>{
    console.log("token",res)
    localStorage.setItem('token',res.success.token)
    
  })
 }
 


 }

