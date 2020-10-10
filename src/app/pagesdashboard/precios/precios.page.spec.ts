import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreciosPage } from './precios.page';

describe('PreciosPage', () => {
  let component: PreciosPage;
  let fixture: ComponentFixture<PreciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
