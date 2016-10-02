import {Page} from 'ionic-angular';
import {Component} from '@angular/core';
import {Platform, ActionSheet, NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/search/search.html'
})

export class SearchPage {
    items;

    constructor() {
        this.initializeItems();
    }

    initializeItems() {
      this.items = [
        'Hamburger',
        'Pizza',
        'Salada'
      ];
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
