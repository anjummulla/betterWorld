import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyMgmtComponent } from './society-mgmt.component';

describe('SocietyMgmtComponent', () => {
  let component: SocietyMgmtComponent;
  let fixture: ComponentFixture<SocietyMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
