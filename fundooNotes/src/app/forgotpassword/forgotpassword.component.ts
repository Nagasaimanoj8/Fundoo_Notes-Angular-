import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  email!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.email = this.formBuilder.group({

      Email: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  onSubmit() {
    if (this.email.valid) {
      console.log("vallid data", this.email.value);
      let data = {
        name:this.email.value.FirstName,
        email:this.email.value.Email,
        password:this.email.value.Password
      }
      this.user.email(data).subscribe((res: any) => {
        console.log("email response", res)
      })
    } else {
      console.log("Invalide data", this.email.value);

    }

  }

}

