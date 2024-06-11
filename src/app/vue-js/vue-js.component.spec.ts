import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueJsComponent } from './vue-js.component';

describe('VueJsComponent', () => {
  let component: VueJsComponent;
  let fixture: ComponentFixture<VueJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VueJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VueJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
