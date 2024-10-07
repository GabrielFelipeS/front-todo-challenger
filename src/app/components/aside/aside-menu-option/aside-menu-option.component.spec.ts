import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuOptionComponent } from './aside-menu-option.component';

describe('AsideMenuOptionComponent', () => {
  let component: AsideMenuOptionComponent;
  let fixture: ComponentFixture<AsideMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideMenuOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
