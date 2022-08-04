import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signin!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit() {
    this.signin = this.formBuilder.group({

      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
   onSubmit() {
    if(this.signin.valid){
      console.log("valid data",this.signin.value);
      let data={
        email:this.signin.value.Email,
        password:this.signin.value.Password
     
      }
      this.user.signin(data).subscribe((res:any)=>{
        console.log("token",res)
        localStorage.setItem('token',res.success.token)
      })
    }else{
      console.log("invalid data",this.signin.value);
    }
    
    }

  }

