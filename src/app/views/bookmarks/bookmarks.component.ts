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

  public info ={
    total : 1,
    size: 20
  };
  public currentPage: number = 1;

  ngAfterViewInit() {
    this.ngxuiLoaderService.start();
    let listBookmarks = []
    let bookmarks = localStorage.getItem("bookmarks");
    if (bookmarks) {
      listBookmarks = JSON.parse(bookmarks)
    }
    const param = '/' + listBookmarks.join(",");
    let that = this;
    this.apiRequest.fnGetChars(param).then((data: any) => {
        that.tableGridService.setListChars([...data]);
        this.ngxuiLoaderService.stop()
    })
  }
}
