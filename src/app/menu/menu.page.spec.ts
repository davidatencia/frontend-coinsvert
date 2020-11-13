import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// <<<<<<< HEAD:src/app/envios/envios.page.spec.ts
// import { EnviosPage } from './envios.page';

// describe('EnviosPage', () => {
//   let component: EnviosPage;
//   let fixture: ComponentFixture<EnviosPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EnviosPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(EnviosPage);
// =======
import { MenuPage } from './menu.page';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPage);
// >>>>>>> david:src/app/menu/menu.page.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
