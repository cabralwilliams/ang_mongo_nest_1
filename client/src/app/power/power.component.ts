import { Component, OnInit } from '@angular/core';
import { PowerService } from './power.service';
// import { PowerInterface } from '../utils/ob-generator';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  powers$: Observable<any> | undefined;
  postUrl: string = `${environment.apiUrl}/powers`;

  constructor(private powerService: PowerService) { }

  ngOnInit(): void {
    this.powers$ = this.powerService.getPowers();
    console.log(this.powers$);
  }

  async createPower(): Promise<void> {
    // event.preventDefault();
    const powerName = (<HTMLInputElement>document.querySelector('#name')).value.trim();
    const description = (<HTMLInputElement>document.querySelector('#description')).value || '';
    if(powerName) {
      const response = await fetch(this.postUrl, {
        method: 'POST',
        body: JSON.stringify({ "name": powerName, description }),
        headers: { 'Content-type': 'application/json' }
      });

      if(response.ok) {
        window.location.reload();
      } else {
        console.log(response.status,response.statusText)
      }
    }
  }
}
