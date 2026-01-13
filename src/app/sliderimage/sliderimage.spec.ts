import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sliderimage } from './sliderimage';

describe('Sliderimage', () => {
  let component: Sliderimage;
  let fixture: ComponentFixture<Sliderimage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sliderimage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sliderimage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
