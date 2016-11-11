import { Component } from '@angular/core';
import { MenuController, NavController, Alert } from 'ionic-angular';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login'

interface Slide {
    title: string;
    description: string;
    image: string;
}

@Component({
    templateUrl: 'build/pages/slider/slider.html'
})
export class SliderPage {
    slides: Slide[];
    showSkip = true;

    constructor(public navCtrl: NavController, public menu: MenuController) {
        this.slides = [
            {
                title: '',
                description: '',
                image: 'img/logo-gradient.png',
            },
            {
                title: 'Bem vindo ao <b>MrFood!</b>',
                description: '<b>MrFood</b> é um aplicativo de delivery de comida. Foi criado com o intuito de servir, de modo rápido e intuitivo, seus pedidos desejados.',
                image: 'img/smile.png',
            },
            {
                title: 'Como usar?',
                description: 'Cadastre-se e navegue pela lista de restaurantes, escolha seu prato e método de pagamento. Então espere seu pedido ser confirmado pelo estabelecimento escolhido.',
                image: 'img/question.png',
            }
        ];
    }

    startApp() {
        try {
            this.navCtrl.setRoot(LoginPage);
        } catch(err) {
            err.message = alert("Erro em estabelecer conexão com a internet.");
        }
    }

    // error() {
    //     const alert = Alert.create({
    //         title: 'Conexão com a internet faliu.'
    //     })
    //     this.navCtrl.present(alert);
    // }

    onSlideChangeStart(slider) {
        this.showSkip = !slider.isEnd;
    }

    ionViewDidEnter() {
        this.menu.enable(false);
    }

    ionViewWillLeave() {
        this.menu.enable(false);
    }

}
