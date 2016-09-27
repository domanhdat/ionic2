import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  public profilePage = ProfilePage;

  constructor(public navCtrl: NavController) {
  }
}
