import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tunelist-item',
  templateUrl: './tunelist-item.component.html',
  styleUrls: ['./tunelist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TunelistItemComponent implements OnInit {

    @Input() tune;

    constructor() { }

    ngOnInit() {
    }
}
