import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(private httpClient: HttpClient) { }

  getPowers() {
    return this.httpClient.get('http://localhost:3000/power');
  }
}
