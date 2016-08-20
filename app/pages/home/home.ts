import {Component, ViewChild, ElementRef} from '@angular/core';
import {App, Loading, Modal, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {EmAndamento} from '../in-progress/in-progress';

@Component({
    templateUrl: 'build/pages/home/home.html',
})

@Page({
    templateUrl: 'build/pages/home/item-content.html'
})

export class HomePage {

    home: string = "home";
    constructor(public nav: NavController) { }

    doBuy() {
        let alert = Alert.create({
            title: 'Compra Realizada!',
            message: 'Seu pedido foi realizado com sucesso.',
            buttons: ['Ok']
        });
        this.nav.present(alert);
    }

    presentLoading() {
        let loading = Loading.create({
            content: "Please wait...",
            duration: 3000,
            dismissOnPageChange: true
        });
        this.nav.present(loading);
    }

    openModal(characterNum) {
        let modal = Modal.create(ModalsContentPage, characterNum);
        this.nav.present(modal);
    }
}

@Component({
    templateUrl: 'build/pages/home/item-content.html'
})

class ModalsContentPage {
    character;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
