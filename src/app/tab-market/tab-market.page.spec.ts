import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabMarketPage } from './tab-market.page';

describe('TabMarketPage', () => {
  let component: TabMarketPage;
  let fixture: ComponentFixture<TabMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
