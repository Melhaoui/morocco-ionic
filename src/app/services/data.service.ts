import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public lastIDDocumentReservation: any;

  constructor(
    private afs : AngularFirestore
  ) { }

  //add reservation
  addReservation(reservation : Reservation) {
    return this.afs.collection('/reservation').add(reservation)
  }

  //add reservation
  getReservationByID(id: string) {
    return this.afs.collection('reservation').doc(id).ref.get()
  }

}
