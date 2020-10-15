import { Home } from './home.model';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  productHaveStock = [];
  private homes: Home[] = [
    {
      id: 'c1',
      title: 'Intel Core i-7',
      jenis: 'RAM',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Uqkr5BHZL._AC_SL1280_.jpg',
      harga: '4.480.000',
      stok: 5,
      merek : 'Intel',
      model : 'VictoriaSecret',
      baseclock: 1,
      boostclock: 3,
      core: 8,
      thread: 2,
      speed: null,
      ukuran: null,
      chipset: null,
      merekprosesor: null
    },
    {
      id: 'c2',
      title: 'ROG Zephyrus',
      jenis: 'CPU',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/22/64681733/64681733_f33531d3-ba10-4747-b8ce-1ed544ebdfe7_617_617',
      harga: '31.500.000',
      stok: 10,
      merek : 'Intel',
      model : 'Paparazi',
      baseclock: null,
      boostclock: null,
      core: null,
      thread: null,
      speed: 2,
      ukuran: 3,
      chipset: null,
      merekprosesor: null
    },
    {
      id: 'c3',
      title: 'GPU Minyak Urut',
      jenis: 'GPU',
      imageUrl: 'https://www.eetasia.com/wp-content/uploads/sites/2/2020/06/GPU.jpg?w=900',
      harga: '5.500.000',
      stok: 10,
      merek : 'Intel',
      model : 'Paparazi',
      baseclock: null,
      boostclock: null,
      core: null,
      thread: null,
      speed: 2,
      ukuran: 3,
      chipset: null,
      merekprosesor: null
    },
  ];
  constructor() { }

  getAllHomes(){
    this.productHaveStock = [];
    let j = 0;
    for(let i = 0; i < this.homes.length; i++){
      if(this.homes[i].stok > 0){
        this.productHaveStock[j] = this.homes[i];
        j++;
      }
    }
    return[...this.productHaveStock];
  }

  getHome(homeId: string){
    return{...this.homes.find(home=>{return home.id === homeId;
    })};
  }

  deleteHome(homeId: string){
    this.homes = this.homes.filter(home=>{
      return home.id !== homeId;
    });
  }

  editHome(homeId, editedHome){
    return {...this.homes.find(homes => {
        if (homes.id === homeId){
          homes.imageUrl = editedHome['editedImageUrl'];
          homes.model = editedHome['editedModel'];
          homes.harga = editedHome['editedHarga'];
          homes.stok = editedHome['editedStok'];
          homes.baseclock = editedHome['editedBaseclock'];
          homes.boostclock = editedHome['editedBoostclock'];
          homes.core = editedHome['editedCore'];
          homes.thread = editedHome['editedThread'];
          homes.speed = editedHome['editedSpeed'];
          homes.ukuran = editedHome['editedUkuran'];
          homes.chipset = editedHome['editedChipset'];
          homes.merekprosesor = editedHome['editedProsesor'];
        }
    })};
  }

  addProduct(data: FormGroup){
    let DATA = {
      id: 'c' + (parseInt(this.homes[this.homes.length-1].id.substring(1))+1).toString(),
      title: data.value.title,
      jenis: data.value.jenis,
      imageUrl: data.value.foto,
      merek: data.value.merek,
      model: data.value.model,
      harga: data.value.harga,
      stok: data.value.stok,
      baseclock: data.value.baseclock,
      boostclock: data.value.boostclock,
      core: data.value.core,
      thread: data.value.thread,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      chipset: data.value.chipset,
      merekprosesor: data.value.merekprosesor,
    }
    this.homes.push(DATA);
  }
}
