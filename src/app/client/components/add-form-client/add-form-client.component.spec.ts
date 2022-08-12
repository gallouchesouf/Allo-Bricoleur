import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormClientComponent } from './add-form-client.component';

describe('AddFormClientComponent', () => {
  let component: AddFormClientComponent;
  let fixture: ComponentFixture<AddFormClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
