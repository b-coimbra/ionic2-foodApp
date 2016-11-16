import {Component} from '@angular/core';
import {Modal, Platform, NavParams, ViewController, Alert, NavController, Loading, Toast} from 'ionic-angular';


@Component({
    templateUrl: 'build/pages/purchase/purchase.html'
})

export class PurchasePage {
    item;
    constructor(public viewCtrl: ViewController, public params: NavParams, public nav: NavController) {
    }

    comprar() {
        let confirm = Alert.create({
            title: 'Realizar compra?',
            message: 'Clicando em "Comprar" você concorda com os nossos Termos de Compromisso.',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Senha',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelou a compra.');
                    }
                },
                {
                    text: 'Comprar',
                    handler: () => {
                        confirm.dismiss().then(()=> {
                            this.comprou();
                        });
                    }
                }
            ]
        });
        this.nav.present(confirm);
    }

    comprou() {
        let loading = Loading.create({
            content: "Um momento..",
            duration: 3000,
            dismissOnPageChange: true
        });
        this.nav.present(loading);
        setTimeout(() => {
            this.compraConfirmada();
        }, 3000);
    }

    compraConfirmada(){
        const toast = Toast.create({
            message: 'Seu pedido foi realizado. Você receberá uma notificação quando a compra for confirmada.',
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 4000,
            position: "bottom"
        });

        this.nav.present(toast);
    }

    public tap: number = 0;

    dismiss() {
        this.viewCtrl.dismiss();
    }
    tapEvent(e) {
        this.tap++
    }
    tapEventRemove(e) {
        this.tap--
    }
}
