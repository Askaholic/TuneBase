import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

import * as abcjs from "abcjs";

@Component({
  selector: 'app-tunelist-item',
  templateUrl: './tunelist-item.component.html',
  styleUrls: ['./tunelist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TunelistItemComponent implements OnInit, AfterViewInit {

    @Input() tune;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.render();
    }

    render() {
        let engraverParams = {
            scale: 0.5,
            staffwidth: 740 /2
        }
        let divId: string = "tune-" + this.tune._id;
        abcjs.renderAbc(divId, this.tune.abc_body, {}, engraverParams, {});
    }
}
