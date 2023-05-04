import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueastionsComponent } from './view-queastions.component';

describe('ViewQueastionsComponent', () => {
  let component: ViewQueastionsComponent;
  let fixture: ComponentFixture<ViewQueastionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQueastionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQueastionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
