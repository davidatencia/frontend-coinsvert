import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterValidationCodePage } from './register-validation-code.page';

describe('RegisterValidationCodePage', () => {
  let component: RegisterValidationCodePage;
  let fixture: ComponentFixture<RegisterValidationCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterValidationCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterValidationCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});