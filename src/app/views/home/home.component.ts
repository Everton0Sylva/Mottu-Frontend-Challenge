import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { TableGridService } from '../../services/table-grid.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private apiRequest: ApiRequestService, private tableGridService: TableGridService, private ngxuiLoaderService: NgxUiLoaderService,) { }

  onSearchChar = (event: any) => {
    let that = this;
    const str = new Observable<string>((obs) =>
      obs.next(event.target.value.toLowerCase())
    ).pipe(
      debounceTime(1000),
      switchMap(term =>
        that.apiRequest.fnGetChars('/?name=' + term).then((data: any) => {
          if (data.results.length > 0) {
            that.tableGridService.setListChars([...data.results]);
            that.ngxuiLoaderService.startBackgroundLoader("tablegridLoader");
          }
        })
      )
    ).subscribe(()=>
    that.ngxuiLoaderService.stopBackgroundLoader("tablegridLoader"));
  }


  ngAfterViewInit() {
    const param = '/?page=1';
    let that = this;
    this.apiRequest.fnGetChars(param).then((data: any) => {
      if (data?.results?.length > 0) {
        that.tableGridService.setListChars([...data.results]);
      }
    });
  }
}
