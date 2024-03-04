import { Component, ViewChild } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { TableGridService } from '../../services/table-grid.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent {


  constructor(private apiRequest: ApiRequestService, private tableGridService: TableGridService, private ngxuiLoaderService: NgxUiLoaderService,) { }

  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;

  public hasBookmarks: boolean = false;
  public currentPage: number = 1;

  ngAfterViewInit() {
    let listBookmarks: Array<number> = []
    let bookmarks = localStorage.getItem("bookmarks");
    if (bookmarks) {
      listBookmarks = JSON.parse(bookmarks)
      if (listBookmarks.length > 0) {
        this.ngxuiLoaderService.start();
        const param = '/' + listBookmarks.join(",");
        let that = this;
        this.apiRequest.fnGetChars(param).then((data: any) => {
          if(Array.isArray(data)){
          that.tableGridService.setListChars([...data]);
          } else that.tableGridService.setListChars([data]);
          this.ngxuiLoaderService.stop()
          this.hasBookmarks = true;
        })
      }
    }
  }
}
