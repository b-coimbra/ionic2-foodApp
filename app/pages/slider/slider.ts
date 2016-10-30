import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
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
                description: 'Cadastre-se e simplesmente navegue pelas categorias listadas na página principal, e escolha seu prato. Logo após, selecione o ícone de compra, e selecione o estabelecimento e  método de pagamento. Por último, espere seu pedido ser conferido pelo estabelecimento escolhido.',
                image: 'img/question.png',
            }
        ];
    }

    startApp() {
        this.navCtrl.setRoot(LoginPage);
    }

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
