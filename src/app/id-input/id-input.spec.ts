import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { IdInput } from './id-input';

describe('IdInput', () => {
  let component: IdInput;
  let fixture: ComponentFixture<IdInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdInput],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values initialized', () => {
    expect(component).toBeDefined();
  });

  it('should render the component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeTruthy();
  });

  it('should display text in template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const content = compiled.textContent;
    expect(content).toBeTruthy();
  });
});
