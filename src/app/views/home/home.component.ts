import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private apiRequest: ApiRequestService) { }


  public listRows: any = [];

  public pageinfo: any;


  onSearchChar(event: any) {
    this.listRows = [];
    const str = event.target.value.toLowerCase();
    let that = this;
    this.apiRequest.fnGetChars(str).then((data: any) => {
      that.listRows = [...data.results];
      that.pageinfo = data.info;
      debugger
    });
  }



}
