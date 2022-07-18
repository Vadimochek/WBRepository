import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";





interface authUser {
  email: string;
  password: string;
  name?: string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  formAuthReg: FormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  })

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  changeForm(url: string): boolean {
    return this.route.snapshot.url.toString() === url
  }

  authReg() {
    const structureData: authUser = {
      email: this.formAuthReg.getRawValue().email,
      password: this.formAuthReg.getRawValue().password,
      name: this.formAuthReg.getRawValue().name
    }
    if (!structureData.name) {
      delete structureData.name
    }

    if (this.route.snapshot.url.toString() === 'auth') {
      this.authService.login(structureData.email, structureData.password)
    }
    else {
      this.authService.signUp(structureData.email, structureData.password, structureData.name)
    }
    this.formAuthReg.reset();

  }
}
