import {Page, Loading} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {HomePage} from '../home/home';

@Page({
    templateUrl: 'build/pages/login/login.html'
})

export class LoginPage {
    home: string = "home";
    constructor(public nav: NavController) { }

    loginEnter() {
        let loading = Loading.create({
            content: "Espere um momento...",
            duration: 3000,
            dismissOnPageChange: true
        });
        this.nav.present(loading);
    }
}
