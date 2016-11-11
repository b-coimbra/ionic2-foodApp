import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/lugar-detalhe/lugar-detalhe.html',
})
export class LugarDetalhePage {

    constructor(private nav: NavController) {

    }
    limitArray(arr, limit) {
        var tmpArr = [];

        for (var i = 0; i < limit; i++) {
            tmpArr.push(arr[i]);
        }

        return tmpArr;
    }
}
