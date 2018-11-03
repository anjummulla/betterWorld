import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyHeaderComponent } from './society-header.component';

describe('SocietyHeaderComponent', () => {
  let component: SocietyHeaderComponent;
  let fixture: ComponentFixture<SocietyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
