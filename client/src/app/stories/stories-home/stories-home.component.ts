import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoriesService } from '../stories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.css']
})
export class StoriesHomeComponent implements OnInit {

  stories$: Observable<any> | undefined;

  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.stories$ = this.storiesService.getAllStories();
  }

  async createStory() {
    const titleEl = (<HTMLInputElement>document.querySelector('#title'));
    const textEl = (<HTMLInputElement>document.querySelector('#text'));
    const title = titleEl.value.trim();
    const text = textEl.value.trimEnd();
    if(title && text) {
      const response = await fetch(`${environment.apiUrl}/stories`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'COntent-type': 'application/json' }
      });

      if(response.ok) {
        this.stories$ = this.storiesService.getAllStories();
        titleEl.value = '';
        textEl.value = '';
      } else {
        console.log(response.status,response.statusText);
      }
    }
  }
}
