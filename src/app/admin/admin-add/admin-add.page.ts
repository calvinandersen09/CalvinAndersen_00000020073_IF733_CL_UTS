import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.page.html',
  styleUrls: ['./admin-add.page.scss'],
})
export class AdminAddPage implements OnInit {

  newProduct: FormGroup;
  type: string = null;

  constructor(
    private productService: HomeService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {

    this.newProduct = new FormGroup({
      foto: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      jenis: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      merek: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      baseclock: new FormControl(null, {
        updateOn: 'change',
      }),
      boostclock: new FormControl(null, {
        updateOn: 'change',
      }),
      core: new FormControl(null, {
        updateOn: 'change',
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
      }),
      merekprosesor: new FormControl(null, {
        updateOn: 'change',
      }),
    });

  }
 
  addProduct(){
    this.presentLoading().then(() => {
      this.productService.addProduct(this.newProduct);
      this.router.navigate(['/admin']);
      this.addToast();
    });

   
  }

  async confirmAdd() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tambah Produk Confirmation',
      message: 'Apakah anda yakin ingin menambahkan produk?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.addProduct()
        }
      ]
    });

    await alert.present();
  }

  async addToast() {
    const toast = await this.toastController.create({
      message: 'Produk Berhasil di Tambahkan',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Creating Product . . .',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

}
