import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Java17Component } from './java17.component';

describe('Java17Component', () => {
  let component: Java17Component;
  let fixture: ComponentFixture<Java17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Java17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Java17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
