import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  items = [
    {
      citie: 'Oujda',
      img: 'oujda.jpg'
      
    },
    {
      citie: 'Casablanca',
      img: 'casablanca.jpg'
      
    },
    {
      citie: 'Rabat',
      img: 'rabat.jpg'
      
    },
  ];

  constructor( private navCtrl : NavController ) { }

  ngOnInit() {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  visitLogin(item) {
    let navigCtrl = this.navCtrl;
    navigCtrl.navigateForward("/login")
  }

}
