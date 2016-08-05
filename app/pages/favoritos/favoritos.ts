import {Page} from 'ionic-angular';
import {Component} from '@angular/core';
import {Platform, ActionSheet, NavController} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/favoritos/favoritos.html'
})

export class FavoritosPage {
    constructor(public platform: Platform, public nav: NavController) { }
    openMenu() {
  let actionSheet = ActionSheet.create({
    title: 'Opções',
    cssClass: 'action-sheets-basic-page',
    buttons: [
      {
        text: 'Excluír',
        role: 'destructive',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Compartilhar',
        icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel', // will always sort to be on the bottom
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  this.nav.present(actionSheet);
}
}
