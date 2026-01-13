import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourprd } from './ourprd';

describe('Ourprd', () => {
  let component: Ourprd;
  let fixture: ComponentFixture<Ourprd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ourprd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourprd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
