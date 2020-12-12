import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTorneoComponent } from './list-torneo.component';

describe('ListTorneoComponent', () => {
  let component: ListTorneoComponent;
  let fixture: ComponentFixture<ListTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
