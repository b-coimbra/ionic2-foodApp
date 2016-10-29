import {Page, Alert, Toast} from 'ionic-angular';
import {Component} from '@angular/core';
import {Platform, ActionSheet, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Page({
    templateUrl: 'build/pages/favoritos/favoritos.html'
})

export class FavoritosPage {
    items: any = [];

    constructor(private nav: NavController) {

    }

    addFavorite(){

        let prompt = Alert.create({
            title: 'Adicionar item',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'OK',
                    handler: data => {
                        this.items.push(data);
                    }
                }
            ]
        });

        this.nav.present(prompt);
    }

    editFavorite(item){

        let prompt = Alert.create({
            title: 'Editar',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Salvar',
                    handler: data => {
                        let index = this.items.indexOf(item);

                        if(index > -1){
                            this.items[index] = data;
                        }
                    }
                }
            ]
        });

        this.nav.present(prompt);

    }

    deleteFavorite(item){

        const toast = Toast.create({
            message: 'O ítem foi removido!',
            duration: 2000,
            position: "bottom"
        });

        let index = this.items.indexOf(item);

        if(index > -1){
            this.items.splice(index, 1);
            this.nav.present(toast);
        }
    }
}
