import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiRequestService } from './services/api-request.service';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './components/header/header.module';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'pt-br'
    }),
    NgxUiLoaderModule.forRoot({
      delay: 100,
      maxTime: 300000,
      fgsColor: "#00B5CC",
      fgsSize: 100,
      fgsType: SPINNER.threeStrings,
      fgsPosition: 'center-center',
      overlayColor: "rgba(178, 223, 40, 0.8)",
      hasProgressBar: false,
    }),
    
  ],
  providers: [
    TranslateService,
    ApiRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
