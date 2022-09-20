import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroDetailService } from './hero-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  data$: Observable<any> | undefined;
  heroId: string;

  constructor(private route: ActivatedRoute, private heroDetailService: HeroDetailService) {
    this.heroId = '';
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = routeParams.get('_id') || '';
    this.heroId = heroIdFromRoute;
    this.data$ = this.heroDetailService.getHeroDataPlus(heroIdFromRoute);
  }

  async updatePowers() {
    const powerIds = document.querySelectorAll('input[name="powerIds"]') as unknown as HTMLInputElement[];
    console.log(powerIds);
    const checkedIds = Array.from(powerIds).filter(c => c.checked).map(c => c.id);
    console.log(checkedIds);
    console.log(this.heroId);
    const response = await fetch(`${environment.apiUrl}/heroes/${this.heroId}/powers`, {
      method: 'PUT',
      body: JSON.stringify({ powerIds: checkedIds }),
      headers: { "Content-type": "application/json"}
    });
    if(response.ok) {
      window.location.reload();
    } else {
      console.log(response.status, response.statusText);
    }
  }
}
