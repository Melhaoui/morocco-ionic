import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {

  constructor(
    private afs : AngularFirestore
  ) { }

  getAllCities() {
    return this.afs.collection('/cities').valueChanges();
  }

}
