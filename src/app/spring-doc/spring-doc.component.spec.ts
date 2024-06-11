import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringDocComponent } from './spring-doc.component';

describe('SpringDocComponent', () => {
  let component: SpringDocComponent;
  let fixture: ComponentFixture<SpringDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
