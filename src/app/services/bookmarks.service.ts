import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  private _bookmarkscount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }


  setCount(pages: number): void {
    this._bookmarkscount.next(pages);
  }
  getCount(): Observable<number>{
    return this._bookmarkscount.asObservable();
  }

}
