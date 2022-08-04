import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit() {
    this.register = this.formBuilder.group({
     
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      UserName: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
  });
    
}

    onSubmit() {
       if(this.register.valid){
        console.log("valid data",this.register.value);
        let data={
          name:this.register.value.FirstName,
          email:this.register.value.UserName,
          password:this.register.value.Password
        }
        this.user.register(data).subscribe((res:any)=>
        {
          console.log("register response",res);
        })
       }
       else{ 

        console.log("Invalid data",this.register.value);
       }

      }
}
