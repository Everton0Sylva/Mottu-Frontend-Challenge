import { Component, ViewChild } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { TableGridService } from '../../services/table-grid.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private apiRequest: ApiRequestService, private tableGridService: TableGridService, private ngxuiLoaderService: NgxUiLoaderService,) { }

  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;

  public info ={
    total : 1,
    size: 20
  };
  public currentPage: number = 1;

  onSearchChar = (event: any) => {
    let that = this;
    const str = new Observable<string>((obs) =>
      obs.next(event.target.value.toLowerCase())
    ).pipe(
      debounceTime(1000),
      switchMap(term =>
        that.apiRequest.fnGetChars('/?name=' + term).then((data: any) => {
          if (data?.results?.length > 0) {
            that.tableGridService.setListChars([...data.results]);
            this.info.total = data.info.count;
          } else{
            that.tableGridService.setListChars([]);
            this.info.total = 0
          }
            that.ngxuiLoaderService.startBackgroundLoader("tablegridLoader");
        })
      )
    ).subscribe(() =>
      that.ngxuiLoaderService.stopBackgroundLoader("tablegridLoader"));
    this.scrollRef.scrollTo({ top: 0 });
  }


  ngAfterViewInit() {
    this.fnGotoPage().then((info: any) => {
      this.info.total = info.count;
    });
  }
  fnGotoPage() {
    return new Promise((resolve) => {
      const param = '/?page=' + this.currentPage;
      let that = this;
      this.apiRequest.fnGetChars(param).then((data: any) => {
        if (data?.results?.length > 0) {
          that.tableGridService.setListChars([...data.results]);
          resolve(data.info);
        }
      })
    });
  }
}
