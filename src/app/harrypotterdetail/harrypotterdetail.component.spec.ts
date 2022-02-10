import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrypotterdetailComponent } from './harrypotterdetail.component';

describe('HarrypotterdetailComponent', () => {
  let component: HarrypotterdetailComponent;
  let fixture: ComponentFixture<HarrypotterdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarrypotterdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarrypotterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
