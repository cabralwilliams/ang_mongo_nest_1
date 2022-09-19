import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PowerDetailService } from './power-detail.service';

const someInts: number[] = [-100,-95,-90,1,-16,96,34,200,-195,16,82,4,-300];
const sumObserver = {
  sum: 0,
  next(value: number) {
    console.log('Adding:',value);
    this.sum += value;
  },
  complete() {
    console.log('Sum equals',this.sum);
  }
}

@Component({
  selector: 'app-power-detail',
  templateUrl: './power-detail.component.html',
  styleUrls: ['./power-detail.component.css']
})
export class PowerDetailComponent implements OnInit {

  power: Observable<any> | undefined;
  // intOb: Observable<number[]>;

  constructor(private powerDetailService: PowerDetailService, private route: ActivatedRoute) { 
    of(...someInts).subscribe(sumObserver);
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const powerIdFromRoute = routeParams.get('_id') || '';
    console.log(powerIdFromRoute);
    this.power = this.powerDetailService.getPowerById(powerIdFromRoute);
    console.log(this.power);
  }

}
