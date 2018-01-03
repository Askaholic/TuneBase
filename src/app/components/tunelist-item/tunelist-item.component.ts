import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import * as abcjs from "abcjs";

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
        this.render();
    }

    render() {
        let engraverParams = {
            scale: 0.5,
            staffwidth: 740 /2
        }
        abcjs.renderAbc("paper", this.tune.abc_body, {}, engraverParams, {});
    }
}
