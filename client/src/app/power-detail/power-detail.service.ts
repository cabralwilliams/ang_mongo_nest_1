import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PowerInterface } from '../utils/ob-generator';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PowerDetailService {

  constructor(private httpClient: HttpClient) { }

  getPowerById(_id: string): Observable<any> {
    console.log('_id',_id);
    const powerResponse = this.httpClient.get(`${environment.apiUrl}/powers/${_id}`);
    console.log('Power Detail Service:',powerResponse);
    return this.httpClient.get(`${environment.apiUrl}/powers/${_id}`);
  }
}
