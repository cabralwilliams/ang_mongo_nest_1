import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {

  constructor(private httpClient: HttpClient) { }

  getHeroDataPlus(_id: string) {
    return this.httpClient.get(`http://localhost:3000/api/hero/edit/${_id}`);
  }

  updateHeroPowers(_id: string, body: any) {
    return this.httpClient.put(`http://localhost:3000/api/heroes/${_id}/powers`, body, { headers: {
      "Content-type": "application/json"
    }});
  }
}
