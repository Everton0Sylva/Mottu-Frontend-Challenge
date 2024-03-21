import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.scss'
})
export class ViewsComponent {


  constructor(private ngxuiLoaderService: NgxUiLoaderService, private apiRequestService: ApiRequestService) {
    this.ngxuiLoaderService.start();
    this.apiRequestService.onInitURLs().subscribe((data: any) => {
      this.ngxuiLoaderService.stop();
    })
  }

  async ngAfterViewInit() {
    this.apiRequestService.onHttpGet("https://rickandmortyapi.com/api/character/?page=1").subscribe((data: any) => {
      debugger
    })
  }
}
