import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {App} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {EmAndamento} from './pages/in-progress/in-progress';
import {FavoritosPage} from './pages/favoritos/favoritos';
import {ComprasPage} from './pages/compras/compras';
import {HistoricoPage} from './pages/historico/historico';
import {ConfiguracoesPage} from './pages/configuracoes/configuracoes';
import {LoginPage} from './pages/login/login';
import {SobrePage} from './pages/sobre/sobre';

@Component({
    templateUrl: 'build/app.html'
})

export class MyApp {
    home = HomePage;
    andamentos = EmAndamento;
    favoritos = FavoritosPage;
    compras = ComprasPage;
    historico = HistoricoPage;
    configuracoes = ConfiguracoesPage;
    login = LoginPage;
    sobre = SobrePage;

    rootPage: any = this.home;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }

    openPage(option) {
        this.rootPage = option;
    };
}

ionicBootstrap(MyApp);
