import { HomeService } from './home.service';
import { Home } from './home.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  homes: Home[];
  public grid:boolean = true;

  constructor(private homesService: HomeService) {}
  ngOnInit() {
    this.homes = this.homesService.getAllHomes();
  }

  IonViewWillEnter(){
    this.homes = this.homesService.getAllHomes();
  }

  functiongrid(){
    this.grid = !this.grid;
  }
}
