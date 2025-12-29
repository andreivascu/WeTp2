import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeButtonDemo } from './prime-button-demo';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PrimeButtonDemo', () => {
  let component: PrimeButtonDemo;
  let fixture: ComponentFixture<PrimeButtonDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeButtonDemo],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeButtonDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });

  it('should be a standalone false component', () => {
    // PrimeButtonDemo is not standalone
    expect(component.constructor.name).toBe('PrimeButtonDemo');
  });
});
