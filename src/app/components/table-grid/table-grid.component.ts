import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Character } from '../../models/character';
import { TableGridService } from '../../services/table-grid.service';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrl: './table-grid.component.scss'
})
export class TableGridComponent {

  constructor(private apiRequest: ApiRequestService, private tableGridService: TableGridService) { 

  }

  public listChars: Array<Character> = [];


  public pageinfo: any;


  onSearchChar(event: any) {
    this.listChars = [];
    const str = event.target.value.toLowerCase();
    let that = this;
  /*  this.apiRequest.fnGetChars(str).then((data: any) => {
      that.listRows = [...data.results];
      that.pageinfo = data.info;
      debugger
    });*/
  }
  ngAfterViewInit() {
  this.tableGridService.getListChars().subscribe((listchars: Array<Character>)=>{
    if(listchars){
      this.listChars = [...listchars];
    }
  })
  }
}
