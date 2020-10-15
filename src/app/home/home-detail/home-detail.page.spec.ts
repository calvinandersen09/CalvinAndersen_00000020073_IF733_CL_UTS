import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDetailPage } from './home-detail.page';

describe('HomeDetailPage', () => {
  let component: HomeDetailPage;
  let fixture: ComponentFixture<HomeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
