import { Injectable } from '@angular/core';
import { Study } from './studies/Study';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _requestedStudies: Study[] = [];
  requestedStudies: BehaviorSubject<Study[]> = new BehaviorSubject<Study[]>([]);

  constructor() { }

  getStudies(): Study[] {
    return [
      {
        name: 'Recuento eritrocitario',
        category: 'Hemograma',
        price: 2000,
        unavailable: false,
        requested: false,
      },
      {
        name: 'Recuento leucocitario',
        category: 'Hemograma',
        price: 2100,
        unavailable: false,
        requested: false,
      },
      {
        name: 'Recuento trombocitario',
        category: 'Hemograma',
        price: 2200,
        unavailable: false,
        requested: false,
      },
      {
        name: 'Glucemia',
        category: 'Bioquímica',
        price: 1800,
        unavailable: false,
        requested: false,
      },
      {
        name: 'Uremia',
        category: 'Bioquímica',
        price: 2000,
        unavailable: false,
        requested: false,
      },
      {
        name: 'Proteinemia',
        category: 'Bioquímica',
        price: 1600,
        unavailable: false,
        requested: false,
      },
      {
        name: 'Brucelosis',
        category: 'Serología',
        price: 2900,
        unavailable: true,
        requested: false,
      },
      {
        name: 'Leptospirosis',
        category: 'Serología',
        price: 2600,
        unavailable: false,
        requested: false,
      },
      {
        name: 'Erliquiosis',
        category: 'Serología',
        price: 2300,
        unavailable: false,
        requested: false,
      }
    ];
  }

  addToRequestedStudies(study: Study) {
    this._requestedStudies.push(study);
    this.requestedStudies.next(this._requestedStudies);
  }

  removeFromRequestedStudies(study: Study) {
    let studyToRemove = this._requestedStudies.find(s => s.name === study.name);
    if (studyToRemove) {
      this._requestedStudies.splice(this._requestedStudies.indexOf(studyToRemove), 1);
      this.requestedStudies.next(this._requestedStudies);
    }
  }

  checkStudy(study: Study) {
    return this._requestedStudies.find(s => s.name === study.name)?.requested ?? false;
  }
}
