import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Srcabt } from './srcabt';

describe('Srcabt', () => {
  let component: Srcabt;
  let fixture: ComponentFixture<Srcabt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Srcabt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Srcabt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
