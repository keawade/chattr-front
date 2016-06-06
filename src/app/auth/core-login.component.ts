import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, ControlGroup, Control } from '@angular/common'

@Component({
  moduleId: module.id,
  selector: 'chattr-auth-login',
  templateUrl: 'core-login.component.html'
})

export class ChattrAuthCoreLoginComponent implements OnInit {
  loginForm: ControlGroup
  isLoading: boolean
  user = {
    username: '',
    password: ''
  }


  constructor(private _formBuilder: FormBuilder) {}

  onSubmit() {
    console.log('clicked')
    this.isLoading = true
  }

  ngOnInit(): any {
    this.isLoading = false
    this.loginForm = this._formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
}
