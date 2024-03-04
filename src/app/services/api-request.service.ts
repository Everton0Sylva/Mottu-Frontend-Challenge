import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { interval, skipWhile, takeUntil, takeWhile, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE'
  }

  public urls: any = null;

  async onInitURLs() {
    let response = await fetch(environment.baseUrl, {
      method: "GET",
      headers: this.headers
    });
    if (response.ok) {
      this.urls = await response.json();
      return true;
    } else {
      throw new Error(response.status.toString());
    }
  }

  fnGetChars(param: string): Promise<any> {
    return new Promise((resolve) => {
      let inter = interval(100)
        .pipe(
          skipWhile(() => this.urls == null))
        .subscribe(async (t) => {
          inter.unsubscribe();
          let uri = this.urls.characters + param;
          try{
          let res = await this.fnFetch(uri, 'GET');
          resolve(res)
          }catch(e: any){
            resolve([])
          }
        })
    });
  }

  async fnFetch(uri: string, method: string) {
    let response = await fetch(uri, {
      method: method,
      headers: this.headers,
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.status.toString());
    }
  }

}
