import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivearrayComponent } from './reactivearray.component';

describe('ReactivearrayComponent', () => {
  let component: ReactivearrayComponent;
  let fixture: ComponentFixture<ReactivearrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivearrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivearrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
