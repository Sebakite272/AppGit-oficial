import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IngresoMapaPage } from './ingreso-mapa.page';

describe('IngresoMapaPage', () => {
  let component: IngresoMapaPage;
  let fixture: ComponentFixture<IngresoMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
