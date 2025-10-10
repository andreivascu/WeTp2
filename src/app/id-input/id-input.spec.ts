import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdInput } from './id-input';

describe('IdInput', () => {
  let component: IdInput;
  let fixture: ComponentFixture<IdInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
