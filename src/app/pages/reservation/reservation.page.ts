import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  dateDebut: any
  dateFin: any
  prix: any
  obs: any

  reservationObj : Reservation = {
    dateDebut: new Date(),
    dateFin: new Date(),
    prix: 0,
    obs: ''
  }
  constructor(
    private data : DataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  addRservation(form: NgForm) {
    //this.dateDebut = form.value.dateDebut;
    this.reservationObj.dateDebut = form.value.dateDebut;
    this.reservationObj.dateFin = form.value.dateFin;
    this.reservationObj.prix = form.value.prix;
    this.reservationObj.obs = form.value.obs;

    this.data.addReservation(this.reservationObj).then(res => {
      console.log("add success");
      console.log(res.id);  
      this.data.lastIDDocumentReservation = res.id;
      this.router.navigate(['show-reservation']);
    }).catch(error => {
      console.log("error");
    });
  }

}
