import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtMatchComponent } from './tt-match.component';

describe('TtMatchComponent', () => {
  let component: TtMatchComponent;
  let fixture: ComponentFixture<TtMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TtMatchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TtMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
