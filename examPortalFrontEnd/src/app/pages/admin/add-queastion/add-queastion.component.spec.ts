import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQueastionComponent } from './add-queastion.component';

describe('AddQueastionComponent', () => {
  let component: AddQueastionComponent;
  let fixture: ComponentFixture<AddQueastionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQueastionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQueastionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
