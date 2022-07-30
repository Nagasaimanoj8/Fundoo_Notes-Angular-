import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  Email!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.Email = this.formBuilder.group({

      Email: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  onSubmit() {
    if (this.Email.valid) {
      console.log("vallid data", this.Email.value);
      let data = {
        name:this.Email.value.FirstName,
        email:this.Email.value.Email,
        password:this.Email.value.Password
 
       

      }
      this.user.email(data).subscribe((res: any) => {
        console.log("email response", res)
      })
    } else {
      console.log("Invalide data", this.Email.value);

    }

  }

}

