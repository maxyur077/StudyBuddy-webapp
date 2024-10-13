import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstpassComponent } from './rstpass.component';

describe('RstpassComponent', () => {
  let component: RstpassComponent;
  let fixture: ComponentFixture<RstpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RstpassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RstpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
