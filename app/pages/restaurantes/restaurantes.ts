import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LugarDetalhePage} from '../lugar-detalhe/lugar-detalhe';

@Component({
    templateUrl: 'build/pages/restaurantes/restaurantes.html',
})
export class RestaurantesPage {

    places = [];
    constructor(private nav: NavController) {
        this.places = [
            {
                id: 1,
                name: "Pizzaria Di Napoli",
                district: "Vila Santa Cruz",
                city: "Matão",
                website: "http://www.mrfood.com.br",
                phone: "+991284812",
                num_reviews: 3,
                num_photos: 32,
                num_bookmarks: 27,
                num_check_in: 1316,
                num_votes: 232,
                bookmarked: false,
                address: "Av. Padre Nelson Antonio Romão - 416",
                rating: 4.1,
                cuisines: "Pizza",
                cost: 20,
                accepted_card: 1,
                accepted_cash: 1,
                highlights: ['Almoço', 'Delivery disponível'],
                working_hours: {
                    monday: {
                        from: 7,
                        to: 18
                    },
                    tuesday: {
                        from: 7,
                        to: 18
                    },
                    wednesday: {
                        from: 7,
                        to: 18
                    },
                    thursday: {
                        from: 7,
                        to: 18
                    },
                    friday: {
                        from: 7,
                        to: 18
                    },
                    saturday: {
                        from: 7,
                        to: 18
                    },
                    sunday: {
                        from: 7,
                        to: 18
                    }
                },
                menu: [
                    {
                        id: 1,
                        name: "Sopa",
                        items: [
                            {
                                id: 1,
                                name: "Pasta Fagioli Soup",
                                price: 4.95
                            },
                            {
                                id: 2,
                                name: "3 Bean Chili Soup with Sour Cream",
                                price: 5.95
                            },
                            {
                                id: 3,
                                name: "Soup of the day",
                                price: 4.95
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Salad",
                        items: [
                            {
                                id: 4,
                                name: "Small Ceasar Salad",
                                price: 6.95
                            },
                            {
                                id: 5,
                                name: "Ceasar Salad with Grilled Steak",
                                price: 13.95
                            },
                            {
                                id: 6,
                                name: "Ceasar Salad"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Pizza",
                        items: [
                            {
                                id: 7,
                                name: "Neopolitan Pizza",
                                price: 3
                            },
                            {
                                id: 8,
                                name: "Sicilian Slice Pie",
                                price: 4
                            },
                            {
                                id: 9,
                                name: "Sicilian Pizza",
                                price: 28
                            }
                        ]
                    }
                ],
                reviews: [
                    {
                        id: 1,
                        username: "Henrique Bortolani",
                        profile_picture: "img/user/adam.jpg",
                        rating: 4.5,
                        comment: "Sabemos que há muito a ser feito, contudo, estamos bastante empolgados com o próximo update. É garantido, você nunca terá uma refeição ruim."
                    },
                    {
                        id: 2,
                        username: "Eduardo Biava",
                        profile_picture: "img/user/ben.png",
                        rating: 4.5,
                        comment: "Aplicativo em fase de testes, colhetamos os melhores serviços de entrega da cidade."
                    }
                ],
                photos: [
                    {
                        thumb: "img/menu/r1_thumb.jpg",
                        full_size: "img/menu/r1.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r2_thumb.jpg",
                        full_size: "img/menu/r2.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r3_thumb.jpg",
                        full_size: "img/menu/r3.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r4_thumb.jpg",
                        full_size: "img/menu/r4.jpg",
                        description: ""
                    }
                ]
            },
            {
                id: 2,
                name: "Restaurante Lopes",
                district: "Centro",
                city: "Matão",
                website: "http://mrfood.com",
                phone: "+84988888888",
                num_reviews: 193,
                num_photos: 32,
                num_bookmarks: 27,
                num_check_in: 1316,
                num_votes: 232,
                bookmarked: false,
                address: "R. Rui Barbosa, 1088",
                rating: 4.1,
                cuisines: "Variados",
                cost: 20,
                accepted_card: 1,
                accepted_cash: 1,
                highlights: ['Breakfast', 'Takeaway available'],
                working_hours: {
                    monday: {
                        from: 7,
                        to: 18
                    },
                    tuesday: {
                        from: 7,
                        to: 18
                    },
                    wednesday: {
                        from: 7,
                        to: 18
                    },
                    thursday: {
                        from: 7,
                        to: 18
                    },
                    friday: {
                        from: 7,
                        to: 18
                    },
                    saturday: {
                        from: 7,
                        to: 18
                    },
                    sunday: {
                        from: 7,
                        to: 18
                    }
                },
                menu: [
                    {
                        id: 1,
                        name: "Soup",
                        items: [
                            {
                                id: 1,
                                name: "Pasta Fagioli Soup",
                                price: 4.95
                            },
                            {
                                id: 2,
                                name: "3 Bean Chili Soup with Sour Cream",
                                price: 5.95
                            },
                            {
                                id: 3,
                                name: "Soup of the day",
                                price: 4.95
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Salad",
                        items: [
                            {
                                id: 4,
                                name: "Small Ceasar Salad",
                                price: 6.95
                            },
                            {
                                id: 5,
                                name: "Ceasar Salad with Grilled Steak",
                                price: 13.95
                            },
                            {
                                id: 6,
                                name: "Ceasar Salad"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Pizza",
                        items: [
                            {
                                id: 7,
                                name: "Neopolitan Pizza",
                                price: 3
                            },
                            {
                                id: 8,
                                name: "Sicilian Slice Pie",
                                price: 4
                            },
                            {
                                id: 9,
                                name: "Sicilian Pizza",
                                price: 28
                            }
                        ]
                    }
                ],
                reviews: [
                    {
                        id: 1,
                        username: "Henrique Bortolani",
                        profile_picture: "img/user/adam.jpg",
                        rating: 4.5,
                        comment: "Sabemos que há muito a ser feito, contudo, estamos bastante empolgados com o próximo update. É garantido, você nunca terá uma refeição ruim."
                    },
                    {
                        id: 2,
                        username: "Henrique Bortolani",
                        profile_picture: "img/user/ben.png",
                        rating: 4.5,
                        comment: "Aplicativo em fase de testes, colhetamos os melhores serviços de entrega da cidade."
                    }
                ],
                photos: [
                    {
                        thumb: "img/menu/r4_thumb.jpg",
                        full_size: "img/menu/r4.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r5_thumb.jpg",
                        full_size: "img/menu/r5.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r6_thumb.jpg",
                        full_size: "img/menu/r6.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r7_thumb.jpg",
                        full_size: "img/menu/r7.jpg",
                        description: ""
                    }
                ]
            },
            {
                id: 3,
                name: "Spot Burger",
                district: "Nova Matão",
                city: "Matão",
                website: "http://www.mrfood.com",
                phone: "+16 3382-1150",
                num_reviews: 193,
                num_photos: 32,
                num_bookmarks: 27,
                num_check_in: 1316,
                num_votes: 232,
                bookmarked: false,
                address: "Av. Araraquara, 967",
                rating: 4.5,
                cuisines: "Salgados",
                cost: 20,
                accepted_card: 1,
                accepted_cash: 1,
                highlights: ['Breakfast', 'Takeaway available'],
                working_hours: {
                    monday: {
                        from: 7,
                        to: 18
                    },
                    tuesday: {
                        from: 7,
                        to: 18
                    },
                    wednesday: {
                        from: 7,
                        to: 18
                    },
                    thursday: {
                        from: 7,
                        to: 18
                    },
                    friday: {
                        from: 7,
                        to: 18
                    },
                    saturday: {
                        from: 7,
                        to: 18
                    },
                    sunday: {
                        from: 7,
                        to: 18
                    }
                },
                menu: [
                    {
                        id: 1,
                        name: "Soup",
                        items: [
                            {
                                id: 1,
                                name: "Pasta Fagioli Soup",
                                price: 4.95
                            },
                            {
                                id: 2,
                                name: "3 Bean Chili Soup with Sour Cream",
                                price: 5.95
                            },
                            {
                                id: 3,
                                name: "Soup of the day",
                                price: 4.95
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Salad",
                        items: [
                            {
                                id: 4,
                                name: "Small Ceasar Salad",
                                price: 6.95
                            },
                            {
                                id: 5,
                                name: "Ceasar Salad with Grilled Steak",
                                price: 13.95
                            },
                            {
                                id: 6,
                                name: "Ceasar Salad"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Pizza",
                        items: [
                            {
                                id: 7,
                                name: "Neopolitan Pizza",
                                price: 3
                            },
                            {
                                id: 8,
                                name: "Sicilian Slice Pie",
                                price: 4
                            },
                            {
                                id: 9,
                                name: "Sicilian Pizza",
                                price: 28
                            }
                        ]
                    }
                ],
                reviews: [
                    {
                        id: 1,
                        username: "Henrique Bortolani",
                        profile_picture: "img/user/adam.jpg",
                        rating: 4.5,
                        comment: "Sabemos que há muito a ser feito, contudo, estamos bastante empolgados com o próximo update. É garantido, você nunca terá uma refeição ruim."
                    },
                    {
                        id: 2,
                        username: "Eduardo Biava",
                        profile_picture: "img/user/ben.png",
                        rating: 4.5,
                        comment: "Aplicativo em fase de testes, colhetamos os melhores serviços de entrega da cidade."
                    }
                ],
                photos: [
                    {
                        thumb: "img/menu/r6_thumb.jpg",
                        full_size: "img/menu/r6.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r2_thumb.jpg",
                        full_size: "img/menu/r2.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r1_thumb.jpg",
                        full_size: "img/menu/r1.jpg",
                        description: ""
                    },
                    {
                        thumb: "img/menu/r4_thumb.jpg",
                        full_size: "img/menu/r4.jpg",
                        description: ""
                    }
                ]
            }
        ];
    }

    getWorkingHours(hours) {
        var d = new Date();
        var currentDay = {};
        var currentWeekDay = {};

        switch (d.getDay()) {
            case 0:
            currentDay = hours.sunday;
            currentWeekDay = 'Domingo';
            break;
            case 1:
            currentDay = hours.monday;
            currentWeekDay = 'Segunda';
            break;
            case 2:
            currentDay = hours.tuesday;
            currentWeekDay = 'Terça';
            break;
            case 3:
            currentDay = hours.wednesday;
            currentWeekDay = 'Quarta';
            break;
            case 4:
            currentDay = hours.thursday;
            currentWeekDay = 'Quinta';
            break;
            case 5:
            currentDay = hours.friday;
            currentWeekDay = 'Sexta';
            break;
            case 6:
            currentDay = hours.saturday;
            currentWeekDay = 'Sábado';
            break;
        }

        return currentWeekDay + ' ' + currentDay + 'h até ' + currentDay + 'h';
    }

    limitArray(arr, limit) {
        var tmpArr = [];

        for (var i = 0; i < limit; i++) {
            tmpArr.push(arr[i]);
        }

        return tmpArr;
    }

    viewPlace(id) {
        this.nav.push(LugarDetalhePage, {id: id});
    }
}
