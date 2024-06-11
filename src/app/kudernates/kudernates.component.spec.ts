import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudernatesComponent } from './kudernates.component';

describe('KudernatesComponent', () => {
  let component: KudernatesComponent;
  let fixture: ComponentFixture<KudernatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KudernatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KudernatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
