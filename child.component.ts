import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildComponent ngOnChanges:', changes);
  }

  trackByFn(index: number, item: any) {
    return item.id; // Assuming each item has a unique 'id' property
  }
}