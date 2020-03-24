import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForofourComponent } from './forofour.component';

describe('ForofourComponent', () => {
  let component: ForofourComponent;
  let fixture: ComponentFixture<ForofourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForofourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForofourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
