import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(){
    this.charactersService.retornar()
      .subscribe( result => this.characters = result)
  }
}
