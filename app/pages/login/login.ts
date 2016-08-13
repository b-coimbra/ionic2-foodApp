import {Page, Loading} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';

@Page({
    templateUrl: 'build/pages/login/login.html',
    directives: [FORM_DIRECTIVES]
})

export class LoginPage {


    authForm: ControlGroup;
    username: AbstractControl;
    password: AbstractControl;

    home: string = "home";
    constructor(public nav: NavController, private navController: NavController, private fb: FormBuilder) {
        this.authForm = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(3), CustomValidators.checkFirstCharacterValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8), CustomValidators.checkFirstCharacterValidator])]
        });

        this.username = this.authForm.controls['username'];
        this.password = this.authForm.controls['password'];
    }

    onSubmit(value: string): void {
        if(this.authForm.valid) {
            console.log('Valores enviados: ', value);
        }
    }

    loginEnter() {
        let loading = Loading.create({
            content: "Espere um momento...",
            duration: 3000,
            dismissOnPageChange: true
        });
        this.nav.present(loading);
    }
}
