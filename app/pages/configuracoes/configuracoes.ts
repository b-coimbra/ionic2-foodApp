import {NavController, Page, Toast} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
    templateUrl: 'build/pages/configuracoes/configuracoes.html'
})


@Page({
    templateUrl: 'build/pages/configuracoes/configuracoes.html'
})

export class ConfiguracoesPage {
    constructor(public nav: NavController) {}

    SaveChanges(){
        const toast = Toast.create({
            message: 'Suas configurações foram salvas',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        this.nav.present(toast);
    }
}
