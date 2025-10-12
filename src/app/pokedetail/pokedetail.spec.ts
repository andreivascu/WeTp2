import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokedetail } from './pokedetail';

describe('Pokedetail', () => {
  let component: Pokedetail;
  let fixture: ComponentFixture<Pokedetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokedetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokedetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
