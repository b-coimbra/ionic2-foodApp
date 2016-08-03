import {Component, ViewChild, ElementRef} from '@angular/core';
import {Modal, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {EmAndamento} from '../in-progress/in-progress';

@Component({
    templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
    home: string = "home";
    constructor(public nav: NavController) { }

    openModal(characterNum) {
        let modal = Modal.create(ModalsContentPage, characterNum);
        this.nav.present(modal);
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

@Component({
    templateUrl: 'build/pages/home/item-content.html'
})

class ModalsContentPage {
    character;

constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
) {
  var characters = [
    {
      name: 'Hamburger',
      quote: 'lanchonete',
      image: 'img/burger.png',
      items: [
        { title: 'Estabelecimento', note: 'nome' },
        { title: 'Preço', note: '$7' },
        { title: 'algo', note: 'algo' }
      ]
    },
    {
      name: 'Frodo',
      quote: 'Go back, Sam! I\'m going to Mordor alone!',
      image: 'img/avatar-frodo.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Weapon', note: 'Sting' }
      ]
    },
    {
      name: 'Samwise Gamgee',
      quote: 'What we need is a few good taters.',
      image: 'img/avatar-samwise.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Nickname', note: 'Sam' }
      ]
    }
  ];
  this.character = characters[this.params.get('charNum')];
}

dismiss() {
  this.viewCtrl.dismiss();
}
}
