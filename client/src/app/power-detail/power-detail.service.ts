import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PowerInterface } from '../utils/ob-generator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerDetailService {

  constructor(private httpClient: HttpClient) { }

  getPowerById(_id: string): Observable<any> {
    console.log('_id',_id);
    const powerResponse = this.httpClient.get(`http://localhost:3000/power/${_id}`);
    console.log('Power Detail Service:',powerResponse);
    return this.httpClient.get(`http://localhost:3000/power/${_id}`);
  }
}
