import { Component, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnChanges {
  @Input() data: any;
  childData: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.childData = { value: 'Initial Data' };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      console.log('Parent data changed:', changes.data.currentValue);
      this.childData = { value: changes.data.currentValue };
      this.cdr.markForCheck();
    }
  }

  logChangeDetection() {
    console.log('Change detection run for ParentComponent');
  }
}