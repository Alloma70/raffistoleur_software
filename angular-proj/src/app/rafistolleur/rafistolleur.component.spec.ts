import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafistolleurComponent } from './rafistolleur.component';

describe('RafistolleurComponent', () => {
  let component: RafistolleurComponent;
  let fixture: ComponentFixture<RafistolleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RafistolleurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafistolleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
