import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ],
      providers: [ ChangeDetectorRef ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log change detection runs', () => {
    spyOn(console, 'log');
    component.ngOnChanges();
    expect(console.log).toHaveBeenCalledWith('Change detection run for ParentComponent');
  });

  it('should pass data to child component', () => {
    component.data = 'Test Data';
    fixture.detectChanges();
    const childDebugElement = fixture.debugElement.query(By.directive(ChildComponent));
    const childComponentInstance = childDebugElement.componentInstance;
    expect(childComponentInstance.data).toBe('Test Data');
  });
});