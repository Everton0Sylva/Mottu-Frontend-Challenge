import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiRequestService } from './api-request.service';
import { environment } from '../../environments/environment';

describe('ApiRequestService', () => {
  let service: ApiRequestService;
  let httpController: HttpTestingController;


  afterEach(() => {
    httpController.verify();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiRequestService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Testig onInitURLs', (done) => {
    let uris = {
      "characters": "https://rickandmortyapi.com/api/character",
      "locations": "https://rickandmortyapi.com/api/location",
      "episodes": "https://rickandmortyapi.com/api/episode"
    };
    service.onInitURLs().subscribe((resp: any) => {
      expect(resp).toBeTrue();
      done()
    })

    const request = httpController.expectOne(environment.baseUrl);

    request.flush(uris);
  }, 10000);
  /*
    it('Testig onInitURLs', (done) => {
      service.onInitURLs().subscribe((resp: any) => {
        expect(resp).toBeTrue();
        done()
      })
    }, 10000);
    */

  it('Testig fnGetChars', (done) => {
    let resp = {
      "info": {
        "count": 826,
        "pages": 42,
        "next": "https://rickandmortyapi.com/api/character?page=2",
        "prev": null
      },
      "results": [
        {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "episode": [
            "https://rickandmortyapi.com/api/episode/1",
          ],
          "url": "https://rickandmortyapi.com/api/character/1",
          "created": "2017-11-04T18:48:46.250Z"
        }
      ]
    }
    const uri = 'https://rickandmortyapi.com/api/character/?page=1';
    service.onHttpGet(uri).subscribe((data: any) => {
      expect(data.results.length).toBeGreaterThanOrEqual(0);
      done();
    });


    const request = httpController.expectOne(uri);

    request.flush(resp);


  });
});
