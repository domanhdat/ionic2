import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfileService} from './../../providers/profile-service/profile-service';

@Component({
  templateUrl: 'build/pages/profile/profile.html',
  providers: [ProfileService]
})
export class ProfilePage implements OnInit {
  profile: any;
  errorMessage: any;

  constructor(private navCtrl: NavController, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.getProfile();
  }

  protected getProfile() {
    this.profileService.getProfile()
      .then(heroes => this.profile = heroes)
      .catch(error => this.errorMessage = <any>error)
  }
}
