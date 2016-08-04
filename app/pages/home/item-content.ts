import {Component, ViewChild, ElementRef} from '@angular/core';
import {Loading, Modal, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/home/item-content.html'
})

export class ItemContent {
    constructor(public nav: NavController) {}

    buyItem() {
        let alert = Alert.create({
            title: 'Compra Realizada!',
            message: 'Seu pedido foi realizado com sucesso.',
            buttons: ['Ok']
        });
        this.nav.present(alert);
    }

}
