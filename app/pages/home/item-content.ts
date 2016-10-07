import {Component, ViewChild, ElementRef} from '@angular/core';
import {Loading, Modal, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {SearchPage} from '../search/search';

@Component({
    templateUrl: 'build/pages/home/item-content.html'
})

@Page({
    templateUrl: 'build/pages/home/item-content.html'
})

export class ItemContent {
    searchPage = SearchPage;

    constructor(private nav: NavController){}
}
