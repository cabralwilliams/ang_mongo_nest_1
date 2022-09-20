import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpclient: HttpClient) { }

  getHeroes() {
    return this.httpclient.get(`${environment.apiUrl}/heroes`);
  }
}
