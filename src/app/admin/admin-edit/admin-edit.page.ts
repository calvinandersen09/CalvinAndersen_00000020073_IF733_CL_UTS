import { Home } from './../../home/home.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.page.html',
  styleUrls: ['./admin-edit.page.scss'],
})
export class AdminEditPage implements OnInit {

  loadedEditedHome: Home;

  private productEdit = {
    editedImageUrl: '',
    editedModel: '',
    editedharga: 0,
    editedStok: 0,
    editedBaseclock: 0,
    editedBoostclock: 0,
    editedCore: 0,
    editedThread: 0,
    editedSpeed: 0,
    editedUkuran: 0,
    editedChipset: '',
    editedProcessor: '',
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private homeservice: HomeService,
      private router: Router,
      private toastController: ToastController,
      private alertController: AlertController,
      public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('adminId')) { return; }
      const homeId = paramMap.get('adminId');
      this.loadedEditedHome = this.homeservice.getHome(homeId);

      this.productEdit['editedImageUrl'] = this.loadedEditedHome.imageUrl;
      this.productEdit['editedModel'] = this.loadedEditedHome.model;
      this.productEdit['editedHarga'] = this.loadedEditedHome.harga;
      this.productEdit['editedStok'] = this.loadedEditedHome.stok;
      this.productEdit['editedBaseclock'] = this.loadedEditedHome.baseclock;
      this.productEdit['editedBoostclock'] = this.loadedEditedHome.boostclock;
      this.productEdit['editedCore'] = this.loadedEditedHome.core;
      this.productEdit['editedThread'] = this.loadedEditedHome.thread;
      this.productEdit['editedSpeed'] = this.loadedEditedHome.speed;
      this.productEdit['editedUkuran'] = this.loadedEditedHome.ukuran;
      this.productEdit['editedChipset'] = this.loadedEditedHome.chipset;
      this.productEdit['editedProcessor'] = this.loadedEditedHome.merekprosesor;

    })
  }

  editHome(){
    this.presentLoading().then(() => {
      this.homeservice.editHome(this.loadedEditedHome.id, this.productEdit)
      this.router.navigate(['/admin']);
      this.editToast();
    });
  }

  async confirmEdit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Item',
      message: 'Save Changes ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.editHome()
        }
      ]
    });

    await alert.present();
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Produk Berhasil di Ubah.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Updating Product . . .',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }


}
