import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolheader } from './toolheader';

describe('Toolheader', () => {
  let component: Toolheader;
  let fixture: ComponentFixture<Toolheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toolheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
