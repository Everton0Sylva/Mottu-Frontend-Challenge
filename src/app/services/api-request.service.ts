import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable, interval, map, skipWhile, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  httpClient = inject(HttpClient);

  onInitURLs() {
    let that = this;
    return this.httpClient.get(environment.baseUrl, {
      headers: this.headers
    }).pipe(map((data: any) => {
      that.urls = data;
      return true;
    }));
  }
  
  onHttpGet(uri: string) {
    return this.httpClient.get(uri, {
      headers: this.headers
    });
  }

  fnGetChars(param: string): Promise<any> {
    return new Promise((resolve) => {
      let inter = interval(100)
        .pipe(
          skipWhile(() => this.urls == null))
        .subscribe(async (t) => {
          inter.unsubscribe();
          let uri = this.urls.characters + param;
          try {
            let res = await this.fnFetch(uri, 'GET');
            resolve(res)
          } catch (e: any) {
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
