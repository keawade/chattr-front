import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, ControlGroup, Control } from '@angular/common'

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class ChattrAuthRegisterComponent implements OnInit {
  registerForm: ControlGroup
  isLoading: boolean
  user = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private _formBuilder: FormBuilder) {}

  onSubmit() {
    console.log('clicked')
    this.isLoading = true
  }

  ngOnInit(): any {
    this.isLoading = false
    this.registerForm = this._formBuilder.group({
      'username': ['', Validators.compose([
        Validators.required,
        isValidUsername
      ])],
      'email': ['', Validators.compose([
        Validators.required,
        isValidEmail
      ])],
      'password': ['', Validators.compose([
        Validators.required,
        isValidPassword
      ])],
      'confirmPassword': ['', Validators.compose([
        Validators.required,
        isValidPassword
      ])]
    })
  }
}

// Any characters
function isValidUsername(control: Control): {[s: string]: boolean} {
  if (control.value.length < 5) {
    return {isLongEnough: false}
  }
}

// Any number of alpha, numeric, and given symbols, @, same as first, ., at least two alpha characters.
function isValidEmail(control: Control): {[s: string]: boolean} {
  var regexp = new RegExp('^.+@.+$')
  if (!regexp.test(control.value)) {
    return {isValidEmail: false}
  }
}

// Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number:
function isValidPassword(control: Control): {[s: string]: boolean} {
  var regexp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
  if (!regexp.test(control.value)) {
    return {isValidPassword: false}
  }
}
