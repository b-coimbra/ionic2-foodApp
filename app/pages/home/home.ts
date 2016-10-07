import {Component, ViewChild, ElementRef} from '@angular/core';
import {App, Loading, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {SearchPage} from '../search/search';
import {ConfiguracoesPage} from '../configuracoes/configuracoes';

@Component({
    templateUrl: 'build/pages/home/item-content.html'
})

class NavigationDetailsPage {
    item;

    constructor(params: NavParams) {
        this.item = params.data.item;
    }
}

@Component({
    template: `
    <ion-list>
    <button ion-item (click)="openFilters()">Filtros</button>
    <button ion-item (click)="openConfig()">Configurações</button>
    </ion-list>
    `
})
class PopoverPage {
    constructor(public viewCtrl: ViewController, public navCtrl: NavController) { }

    close() {
        this.viewCtrl.dismiss();
    }

    openConfig() {
        this.navCtrl.push(ConfiguracoesPage);
    }
}

@Component({
    templateUrl: 'build/pages/home/home.html',
})

export class HomePage {
    searchPage = SearchPage;

    items = [];

    home: string = "home";
    constructor(public nav: NavController) {
        this.items = [
            {
                'title': 'Hamburger',
                'icon': 'ios-checkmark',
                'quantity':'10',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'image':'burger',
                'color': '#28df4f'
            },
            {
                'title': 'Pizza',
                'quantity':'7',
                'icon': 'ios-close',
                'description': 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'image':'pizza',
                'color': '#f53d3d'
            },
            {
                'title': 'Salada',
                'quantity':'15',
                'icon': 'ios-close',
                'description': 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'image':'salad',
                'color': '#f53d3d'
            }
        ]
    }

    public presentPopover(ev){
       let popover = Popover.create(PopoverPage);
       this.nav.present(popover, {
         ev: ev
       });
    }

    openNavDetailsPage(item) {
        this.nav.push(NavigationDetailsPage, { item: item });
    }

    doBuy() {
        let alert = Alert.create({
            title: 'Compra Realizada!',
            message: 'Seu pedido foi realizado com sucesso.',
            buttons: ['Ok']
        });
        this.nav.present(alert);
    }
}
