import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
import { CitiesServiceService } from 'src/app/services/cities-service.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  /*items = [
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
  ];*/
  
  items: any =[]

  constructor( 
    private navCtrl : NavController,
    private citiesService: CitiesServiceService
    ) { }

  ngOnInit() {
    this.getAllCities();
  }

  getAllCities() {
    this.citiesService.getAllCities().subscribe(
      cities =>{
        console.log(cities);
        this.items = cities
      } 
    );
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  visitLogin(item) {
    let navigCtrl = this.navCtrl;
    navigCtrl.navigateForward("/login")
  }

}
