import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardex } from './cardex';

describe('Cardex', () => {
  let component: Cardex;
  let fixture: ComponentFixture<Cardex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
