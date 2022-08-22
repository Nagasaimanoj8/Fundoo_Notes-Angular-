import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor( private user: UserService) { }

  ngOnInit(): void {
  }

 submit(){
  let data={
    email:'nagasaimanoj333@gmail.com',
    password:'Ashrithap@8'
  }
  console.log(data);
  
  this.user.signin(data).subscribe((res:any)=>{
    console.log("token",res)
    localStorage.setItem('token',res.success.token)
    
  })
 }
 


 }

