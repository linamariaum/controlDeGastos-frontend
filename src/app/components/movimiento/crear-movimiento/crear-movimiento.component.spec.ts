import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMovimientoComponent } from './crear-movimiento.component';

describe('CrearMovimientoComponent', () => {
  let component: CrearMovimientoComponent;
  let fixture: ComponentFixture<CrearMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
