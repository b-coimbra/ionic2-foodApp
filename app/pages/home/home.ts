import {Component, ViewChild, ElementRef} from '@angular/core';
import {App, Toast, Loading, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {SearchPage} from '../search/search';
import {ConfiguracoesPage} from '../configuracoes/configuracoes';
import {LoginPage} from '../login/login';
import {LUGARES} from '../../util/lugares';
import {PurchasePage} from '../purchase/purchase';

@Component({
    templateUrl: 'build/pages/home/item-content.html'
})

class NavigationDetailsPage {
    item;

    constructor(params: NavParams, public nav: NavController, public viewCtrl: ViewController) {
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

    buyPage() {
        this.viewCtrl.dismiss().then(()=>{
            this.nav.push(PurchasePage);
        });
    }

    buyContent() {
        let alert = Alert.create({
            title: 'Comprar',
            message: 'Selecione os meios de pagamento abaixo.',
            inputs: [
                {
                    type: 'radio',
                    label: 'Cartão',
                    value: 'pay1',
                    checked: true
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Comprar',
                    handler: () => {

                    }
                }
            ]
        });
        this.nav.present(alert);
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
            position: "middle",
            duration: 1000,
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
    burger = [];

    constructor(public nav: NavController) {
        this.nav = nav;
        this.username = window.localStorage.getItem('username');
        this.items = [
            {
                'title': 'Hamburger',
                'name1':'de frango',
                'name2':'de carne',
                'name3':'de soja',
                'icon': 'ios-checkmark',
                'quantity':'3',
                'time':'30min',
                'price':5.50,
                'description': 'Hamburger feito de carne, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'image':'burger',
                'color': '#28df4f'
            },
            {
                'title': 'Pizza',
                'name1':'de calabresa',
                'name2':'de presunto',
                'name3':'americana',
                'name':'de queijo',
                'time':'15min',
                'quantity':'3',
                'icon': 'ios-close',
                'price':22.00,
                'description': 'Pizza de calabresa e catupiri, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                'image':'pizza',
                'color': '#f53d3d'
            },
            {
                'title': 'Salada',
                'name1':'de folhas verdes',
                'name2':'com camarão',
                'time':'35min',
                'name3':'de repolho roxo',
                'quantity':'3',
                'icon': 'ios-close',
                'price':7.00,
                'description': 'Salada de verduras, com alface, tomate etc, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci',
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
