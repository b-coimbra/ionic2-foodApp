import {Page, Alert, Toast} from 'ionic-angular';
import {Component} from '@angular/core';
import {Platform, ActionSheet, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Page({
    templateUrl: 'build/pages/favoritos/favoritos.html'
})

export class FavoritosPage {
    confirmMessage() {
        const toast = Toast.create({
            message: 'Item excluido!',
            duration: 2000,
            position: "bottom"
        });
        this.nav.present(toast);
    }

    deleteAll() {
        let alert = Alert.create({
            title: 'Excluir tudo?',
            message: 'Nota: Esta ação não poderá ser revertida.',
            buttons: [{
                text: "Cancelar",
            },
            {
                text: "Excluir",
                handler: () => {
                    alert.dismiss().then(()=>{
                        this.confirmMessage();
                    });
                }
            }]
        });
        this.nav.present(alert);
    }

    showConfirm() {
        let alert = Alert.create({
            title: 'Excluir?',
            buttons: [{
                text: "Cancelar",
            },
            {
                text: "Excluir",
                handler: () => {
                    alert.dismiss().then(()=>{
                        this.confirmMessage();
                    });
                }
            }]
        });
        this.nav.present(alert);
    }
    constructor(public platform: Platform, public nav: NavController) { }
    openMenu() {
        let actionSheet = ActionSheet.create({
            title: 'Opções',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Excluír',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        actionSheet.dismiss().then(()=>{
                            this.showConfirm();
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        this.nav.present(actionSheet);
    }
}
