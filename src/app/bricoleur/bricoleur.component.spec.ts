import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricoleurComponent } from './bricoleur.component';

describe('BricoleurComponent', () => {
  let component: BricoleurComponent;
  let fixture: ComponentFixture<BricoleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BricoleurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BricoleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
