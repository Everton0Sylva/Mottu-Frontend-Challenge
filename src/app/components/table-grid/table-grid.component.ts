import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Character } from '../../models/character';
import { TableGridService } from '../../services/table-grid.service';
import { BookmarksService } from '../../services/bookmarks.service';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrl: './table-grid.component.scss'
})
export class TableGridComponent {

  constructor(private apiRequest: ApiRequestService, private tableGridService: TableGridService,
    private bookmarksService: BookmarksService) {

  }

  public listChars: Array<Character> = [];
  public listBookmarks: Array<number> = [];

  ngAfterViewInit() {
    this.tableGridService.getListChars().subscribe((listchars: Array<Character>) => {
      if (listchars) {
        this.listChars = [...listchars];
      }
    })
    let bookmarks = localStorage.getItem("bookmarks");
    if (bookmarks) {
      this.listBookmarks = JSON.parse(bookmarks)
      this.bookmarksService.setCount(this.listBookmarks.length)
    }
  }

  fnMarkBookmarks(char: Character) {
    let find = this.listBookmarks.indexOf(char.Id);
    if (find >= 0) {
      this.listBookmarks.splice(find, 1)
    } else {
      this.listBookmarks.push(char.Id);
    }
    this.bookmarksService.setCount(this.listBookmarks.length);
    localStorage.setItem("bookmarks", JSON.stringify(this.listBookmarks));
  }

  isMarked(char: Character): boolean {
    let find = this.listBookmarks.indexOf(char.Id);
    return find >= 0 ? true : false;
  }

}
