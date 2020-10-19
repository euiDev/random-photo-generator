import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoGeneratorService {

  constructor(private http: HttpClient) { }

  getRandomPhoto() {
    return this.http.get<Photo>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID TmMUwH4pqZFCezqHQXLCK3YNLIbeKBTJ5FLCX-fwOQM'
      }
    })
  }
}
