import { Component } from '@angular/core';
import { BookmarksService } from '../../services/bookmarks.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public currentPage = "";

  public bookmarksCount = 0;


  constructor(private bookmarksService: BookmarksService, private router:Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((event:any) => {
        this.currentPage = event.url.indexOf("bookmarks") >=0 ? "bookmarks" : "home";
      });
  }

  ngAfterViewInit() {
    this.bookmarksService.getCount().subscribe((count: number) => {
      this.bookmarksCount = count
    })
  }

}
