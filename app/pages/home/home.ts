import {Component, ViewChild, ElementRef} from '@angular/core';
import {App, Loading, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {SearchPage} from '../search/search';
import {ConfiguracoesPage} from '../configuracoes/configuracoes';
import {LoginPage} from '../login/login';

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
    username;

    constructor(public nav: NavController) {
        this.nav = nav;
        this.username = window.localStorage.getItem('username');
        this.items = [
            {
                'title': 'Hamburger',
                names: [
                    {name:'de carne'},
                    {name:'de frango'}
                ],
                'icon': 'ios-checkmark',
                'quantity':'10',
                'description': 'Selecione a loja em que deseja comprar um Hamburger.',
                'image':'burger',
                'color': '#28df4f'
            },
            {
                'title': 'Pizza',
                'name':'de queijo',
                'quantity':'7',
                'icon': 'ios-close',
                'description': 'Selecione a loja em que deseja comprar uma Pizza.',
                'image':'pizza',
                'color': '#f53d3d'
            },
            {
                'title': 'Salada',
                'name':'de macarrão',
                'quantity':'15',
                'icon': 'ios-close',
                'description': 'Selecione a loja em que deseja comprar sua Salada.',
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
