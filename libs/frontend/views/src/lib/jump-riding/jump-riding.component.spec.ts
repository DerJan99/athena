import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpRidingComponent } from './jump-riding.component';

describe('JumpRidingComponent', () => {
  let component: JumpRidingComponent;
  let fixture: ComponentFixture<JumpRidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JumpRidingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JumpRidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
