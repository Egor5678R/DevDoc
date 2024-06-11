import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Java22Component } from './java22.component';

describe('Java22Component', () => {
  let component: Java22Component;
  let fixture: ComponentFixture<Java22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Java22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Java22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
