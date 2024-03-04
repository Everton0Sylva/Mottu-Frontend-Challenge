import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class TableGridService {
  private _tablegrid: BehaviorSubject<Array<Character>> = new BehaviorSubject<Array<Character>>([]);
  private _tablepages: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }


  setPages(pages: number): void {
    this._tablepages.next(pages);
  }
  getPages(): Observable<number>{
    return this._tablepages.asObservable();
  }

  setListChars(rows: any): void {
    let _rows: Array<Character> = rows.map((row: any) => {
      return new Character(row)
    })
    this._tablegrid.next(_rows);
  }

  getListChars(): Observable<Array<Character>> {
    return this._tablegrid.asObservable();
  }
}
