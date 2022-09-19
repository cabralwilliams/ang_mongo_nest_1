import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpclient: HttpClient) { }

  getHeroes() {
    return this.httpclient.get('http://localhost:3000/api/heroes');
  }
}
