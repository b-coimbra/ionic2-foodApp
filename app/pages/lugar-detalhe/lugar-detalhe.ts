import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {NavigationDetailsPage} from '../home/home';
import {FotosPage} from '../fotos/fotos';

@Component({
    templateUrl: 'build/pages/lugar-detalhe/lugar-detalhe.html',
})
export class LugarDetalhePage {

    constructor(private nav: NavController, public viewCtrl: ViewController) {

    }
    limitArray(arr, limit) {
        var tmpArr = [];

        for (var i = 0; i < limit; i++) {
            tmpArr.push(arr[i]);
        }

        return tmpArr;
    }

    verFotos() {
        this.nav.push(FotosPage);
    }
}
