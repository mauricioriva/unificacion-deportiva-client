import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoTorneoComponent } from './partido-torneo.component';

describe('PartidoTorneoComponent', () => {
  let component: PartidoTorneoComponent;
  let fixture: ComponentFixture<PartidoTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
