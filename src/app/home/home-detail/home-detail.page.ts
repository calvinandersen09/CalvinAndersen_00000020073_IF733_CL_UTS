import { HomeService } from './../home.service';
import { Home } from './../home.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {

  loadedHome: Home;
  constructor(
    private activatedRoute: ActivatedRoute,
    private homesService: HomeService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('homeId')) { return; }
      const homeId = paramMap.get('homeId');
      this.loadedHome = this.homesService.getHome(homeId);
    });
  }
}