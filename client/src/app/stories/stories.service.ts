import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private httpClient: HttpClient) { }

  getAllStories() {
    return this.httpClient.get(`${environment.apiUrl}/stories`);
  }
}
