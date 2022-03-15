import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickyMorty';

  characters:any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get("https://rickandmortyapi.com/api/character")
      .subscribe(
        result => {
          this.characters = result;
        },
        error => {
          console.log('problemas');
        }

      )
  }
}
