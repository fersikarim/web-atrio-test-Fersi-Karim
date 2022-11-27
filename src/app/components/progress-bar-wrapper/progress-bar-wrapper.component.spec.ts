import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarWrapperComponent } from './progress-bar-wrapper.component';

describe('ProgressBarWrapperComponent', () => {
  let component: ProgressBarWrapperComponent;
  let fixture: ComponentFixture<ProgressBarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
