import {Page, Alert, Toast} from 'ionic-angular';
import {Component} from '@angular/core';
import {Platform, ActionSheet, NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/historico/historico.html'
})

export class HistoricoPage {
    constructor(public nav: NavController) {}

    confirmMessage() {
        const toast = Toast.create({
            message: 'Histórico limpo!',
            duration: 1500,
            position: "bottom"
        });
        this.nav.present(toast);
    }

    deleteAll() {
        let alert = Alert.create({
            title: 'Limpar histórico?',
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
}
