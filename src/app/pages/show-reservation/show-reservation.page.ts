import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.page.html',
  styleUrls: ['./show-reservation.page.scss'],
})
export class ShowReservationPage implements OnInit {

  reservation:any;
  constructor(
    private data : DataService,
  ) { }

  ngOnInit() {
    let id = this.data.lastIDDocumentReservation;
    this.getReservatinByID(id)
  }
  
  getReservatinByID = (id:string) => {
    this.data.getReservationByID(id).then((doc) =>  {
      if (doc.exists) {
        this.reservation = doc.data();
      } else {
        console.log("Reservetion not exists");
      }
    }).catch((error) => {
      console.log("There was an error getting your document:", error);
    });
  }

}
