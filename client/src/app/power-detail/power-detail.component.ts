import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PowerDetailService } from './power-detail.service';

@Component({
  selector: 'app-power-detail',
  templateUrl: './power-detail.component.html',
  styleUrls: ['./power-detail.component.css']
})
export class PowerDetailComponent implements OnInit {

  power: Observable<any> | undefined;

  constructor(private powerDetailService: PowerDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const powerIdFromRoute = routeParams.get('_id') || '';
    console.log(powerIdFromRoute);
    this.power = this.powerDetailService.getPowerById(powerIdFromRoute);
    console.log(this.power);
  }

}
