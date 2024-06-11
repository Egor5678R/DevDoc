import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaDocComponent } from './java-doc.component';

describe('JavaDocComponent', () => {
  let component: JavaDocComponent;
  let fixture: ComponentFixture<JavaDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
