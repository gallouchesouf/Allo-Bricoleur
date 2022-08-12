import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMissionComponent } from './view-mission.component';

describe('ViewMissionComponent', () => {
  let component: ViewMissionComponent;
  let fixture: ComponentFixture<ViewMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
