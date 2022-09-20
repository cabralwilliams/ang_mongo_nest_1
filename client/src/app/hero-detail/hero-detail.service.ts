import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {

  constructor(private httpClient: HttpClient) { }

  getHeroDataPlus(_id: string) {
    return this.httpClient.get(`${environment.apiUrl}/hero/edit/${_id}`);
  }

  updateHeroPowers(_id: string, body: any) {
    return this.httpClient.put(`${environment.apiUrl}/heroes/${_id}/powers`, body, { headers: {
      "Content-type": "application/json"
    }});
  }
}
