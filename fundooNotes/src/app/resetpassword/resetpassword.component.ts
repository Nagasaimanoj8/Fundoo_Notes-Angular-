import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  reset!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit() {
    this.reset = this.formBuilder.group({

      Password: ['', [Validators.required, Validators.email]],
      ConformPassword: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
    onSubmit(){
      
      if(this.reset.valid){
        console.log("valid data",this.reset.value);
        let data={
          name:this.reset.value.FirstName,
          email:this.reset.value.UserName,
          password:this.reset.value.Password
        }
        this.user.reset(data).subscribe((res:any)=>
        {
          console.log("reset response",res);
        })
       }
       else{

        console.log("Invalid data",this.reset.value);
       }

      }
  }


