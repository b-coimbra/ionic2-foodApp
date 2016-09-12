import {Component, ViewChild, ElementRef} from '@angular/core';
import {App, Loading, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';

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
    templateUrl: 'build/pages/home/home.html',
})

export class HomePage {
    items = [];

    home: string = "home";
    constructor(public nav: NavController) {
        this.items = [
            {
                'title': 'Hamburger',
                'icon': 'pizza',
                'quantity':'10',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'image':'burger',
                'color': '#E63135'
            },
            {
                'title': 'Pizza',
                'quantity':'7',
                'icon': 'pizza',
                'description': 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'image':'pizza',
                'color': '#0CA9EA'
            },
            {
                'title': 'Salada',
                'quantity':'15',
                'icon': 'pizza',
                'description': 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'image':'salad',
                'color': '#F46529'
            }
        ]
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
