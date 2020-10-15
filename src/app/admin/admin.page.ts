import { HomeService } from 'src/app/home/home.service';
import { Home } from './../home/home.model';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit {

  admin: Home[];
  
  constructor(private adminService: HomeService) {}

  ngOnInit() {
    this.admin = this.adminService.getAllHomes();
  }

  ionViewWillEnter(){
    this.admin = this.adminService.getAllHomes();
  }

  refresh(){
    this.admin = this.adminService.getAllHomes();
  }

  delete(id, SlidingItem: IonItemSliding){
    SlidingItem.close();
    this.adminService.deleteHome(id);
    this.refresh();
  }
}