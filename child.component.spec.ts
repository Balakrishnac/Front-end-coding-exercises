import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
    })
    .overrideComponent(ChildComponent, {
      set: { changeDetection: ChangeDetectionStrategy.OnPush }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log change detection runs', () => {
    spyOn(console, 'log');
    component.ngOnChanges();
    expect(console.log).toHaveBeenCalledWith('Change detection run for ChildComponent');
  });

  it('should update input property correctly', () => {
    component.inputData = 'New Data';
    fixture.detectChanges();
    expect(component.inputData).toBe('New Data');
  });
});