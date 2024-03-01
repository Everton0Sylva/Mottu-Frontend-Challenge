import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE'
  }

  public urls: any;

  constructor() {
    this.onInitURLs().then((data: any) => {
      this.urls = data;
    })
  }


  async onInitURLs() {
    let response = await fetch(environment.baseUrl, {
      method: "GET",
      headers: this.headers
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.status.toString());
    }
  }

  async fnGetChars(str: string) {
    let uri = this.urls.characters + '/?name=' + str;
    return await this.fnFetch(uri, 'GET')
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
