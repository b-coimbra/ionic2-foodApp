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

/*
    messagesRef: Firebase;
    isLoggedIn: boolean;
    authData: any;

    authDataProfileName: string;
    authDataProfileImage: string;
    authDataProfileDescription: string;
    authDataProfileMemberSince: string;
    authDataProfileNoFollowers: int;
    authDataProfileLocation: string;*/

    authForm: ControlGroup;
    username: AbstractControl;
    password: AbstractControl;

    home: string = "home";
    constructor(public nav: NavController, private navController: NavController, private fb: FormBuilder) {
        /*this.messagesRef = "https://mrfood-e4756.firebaseapp.com";
        this.messagesRef = new Firebase(this.firebaseUrl);
        this.messagesRef.onAuth((user) => {
            if (user) {
                this.authData = user;

                this.authDataProfileImage  = this.authData.twitter.profileImageURL.replace(/\_normal/,"");
                this.authDataProfileName = this.authData.twitter.displayName;
                this.authDataProfileDescription = this.authData.twitter.cachedUserProfile.description;
                this.authDataProfileMemberSince = this.authData.twitter.cachedUserProfile.created_at;
                this.authDataProfileNoFollowers = this.authData.twitter.cachedUserProfile.followers_count;
                this.authDataProfileLocation = this.authData.twitter.cachedUserProfile.location;

                this.isLoggedIn = true;
            }
        });*/

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

    /*authWithTwitter() {
        this.messagesRef.authWithOAuthPopup("twitter", (error) => {
            if (error) {
                console.log(error);
            }
        }, {remember: "sessionOnly"});
    }

    unauthWithTwitter() {
        this.messagesRef.unauth();
        this.isLoggedIn = false;
    }*/

    loginEnter() {
        let loading = Loading.create({
            content: "Espere um momento...",
            duration: 3000,
            dismissOnPageChange: true
        });
        this.nav.present(loading);
    }
}
