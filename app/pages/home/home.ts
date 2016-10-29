import {Component, ViewChild, ElementRef} from '@angular/core';
import {App, Toast, Loading, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
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

    public tap: number = 0;

    tapEvent(e) {
        this.tap++
        this.item.price += this.item.price
    }
    tapEventRemove(e) {
        this.tap--
        this.item.price /=2
    }
}

@Component({
    template: `
    <ion-list>
    <button ion-item (click)="openFilters()">Filtros<ion-icon item-right name="md-restaurant"></ion-icon></button>
    <button ion-item (click)="openConfig()">Configurações<ion-icon item-right name="md-settings"></ion-icon></button>
    </ion-list>
    `
})
class PopoverPage {
    constructor(public viewCtrl: ViewController, public navCtrl: NavController) { }

    SaveChanges(){
        const toast = Toast.create({
            message: 'Filtos atualizados.',
            position: "top",
            duration: 2000,
        });
        this.navCtrl.present(toast);
    }

    openFilters() {
        let alert = Alert.create();
        alert.setTitle('Filtros');

        alert.addInput({
            type: 'checkbox',
            label: 'Relevância',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Menor Preço',
            value: 'value2'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Distância',
            value: 'value3',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Tempo De Entrega',
            value: 'value4'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Entrega grátis',
            value: 'value5'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Pagamento online',
            value: 'value7'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: () => {
                alert.dismiss().then(()=> {
                    this.SaveChanges();
                });
            }
        });
        this.viewCtrl.dismiss().then(()=>{
            this.navCtrl.present(alert);
        });
    }

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
                'price':5,
                'description': 'Selecione a loja em que deseja comprar um Hamburger.',
                'image':'burger',
                'color': '#28df4f'
            },
            {
                'title': 'Pizza',
                'name':'de queijo',
                'quantity':'7',
                'icon': 'ios-close',
                'price':22,
                'description': 'Selecione a loja em que deseja comprar uma Pizza.',
                'image':'pizza',
                'color': '#f53d3d'
            },
            {
                'title': 'Salada',
                'name':'de macarrão',
                'quantity':'15',
                'icon': 'ios-close',
                'price':7,
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
