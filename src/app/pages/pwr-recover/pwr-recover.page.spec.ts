import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PwrRecoverPage } from './pwr-recover.page';

describe('PwrRecoverPage', () => {
  let component: PwrRecoverPage;
  let fixture: ComponentFixture<PwrRecoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwrRecoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PwrRecoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
