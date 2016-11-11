import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {App} from 'ionic-angular';
import {NavController, NavParams, Loading} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {EmAndamento} from './pages/in-progress/in-progress';
import {FavoritosPage} from './pages/favoritos/favoritos';
import {HistoricoPage} from './pages/historico/historico';
import {ConfiguracoesPage} from './pages/configuracoes/configuracoes';
import {LoginPage} from './pages/login/login';
import {SobrePage} from './pages/sobre/sobre';
import {SearchPage} from './pages/search/search';
import {SliderPage} from './pages/slider/slider';
import {PurchasePage} from './pages/purchase/purchase';
import {RestaurantesPage} from './pages/restaurantes/restaurantes'
import {LugarDetalhePage} from './pages/lugar-detalhe/lugar-detalhe';
import {Fire} from './util/fire';

@Component({
    templateUrl: 'build/app.html'
})

export class MyApp {
    home = HomePage;
    andamentos = EmAndamento;
    favoritos = FavoritosPage;
    historico = HistoricoPage;
    configuracoes = ConfiguracoesPage;
    login = LoginPage;
    sobre = SobrePage;
    pesquisa = SearchPage;
    slider = SliderPage;
    compra = PurchasePage;
    restaurantes = RestaurantesPage;
    lugardetalhe = LugarDetalhePage;

    rootPage: any = this.slider;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.backgroundColorByHexString("#f53d3d");
        });
    }

    openPage(option) {
        this.rootPage = option;
    };

    checkPreviousAuthorization(): void {
        if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
        (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            this.rootPage = this.login;
        } else {
            this.rootPage = this.home;
        }
    }

    logout(): void {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');

        setTimeout(() => {
            this.rootPage = this.login;
        }, 500);
    }
}

ionicBootstrap(MyApp, [Fire]);
