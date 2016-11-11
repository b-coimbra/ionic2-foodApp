import {Injectable} from '@angular/core';

declare var firebase: any;

@Injectable()
export class Fire {
    user: any = {};

    constructor() {
        var config = {
            apiKey: "AIzaSyAsoNohySyeZCuIMGiES87RySsdUG1QECI",
            authDomain: "mrfood-e4756.firebaseapp.com",
            databaseURL: "https://mrfood-e4756.firebaseio.com",
            storageBucket: "mrfood-e4756.appspot.com",
        };

         // This will bypass the slider screen, even if there's no connection.
        try {
            firebase.initializeApp(config);
        } catch(e) {
            e
        } finally {
        }
    }

    login(token: string, successCallback, errorCallback) {
        let credential = firebase.auth.FacebookAuthProvider.credential(token);

        firebase.auth().signInWithCredential(credential).then(response => {
            this.setUser(token, response.providerData[0]);
            successCallback();
        }, error => {
            errorCallback(error);
        });
    }

    private setUser(token: string, authData: any) {
        this.user.name = authData.displayName;
        this.user.photo = authData.photoURL;
        this.user.id = authData.uid;
        this.user.token = token;

        this.saveUser();
    }

    private saveUser() {
        firebase.database().ref('users').child(this.user.id).set({
            name: this.user.name,
            photo: this.user.photo
        });
    }
}
