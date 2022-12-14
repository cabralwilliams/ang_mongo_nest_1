import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(private httpClient: HttpClient) { }

  getPowers() {
    return this.httpClient.get(`${environment.apiUrl}/powers`);
  }
}
