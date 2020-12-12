import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoEquipoComponent } from './partido-equipo.component';

describe('PartidoEquipoComponent', () => {
  let component: PartidoEquipoComponent;
  let fixture: ComponentFixture<PartidoEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
