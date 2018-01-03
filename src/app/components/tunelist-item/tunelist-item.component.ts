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

    protected open: boolean;
    protected dropdownOpen: boolean;

    constructor() { }

    ngOnInit() {
        this.open = false;
    }

    ngAfterViewInit() {
        this.render();
    }

    toggle() {
        this.open = !this.open;
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    render() {
        let engraverParams = {
            responsive: 'resize',
            paddingTop: 100
        }
        abcjs.renderAbc("tune-" + this.tune._id, this.tune.getABCBody(), {}, engraverParams, {});
    }
}
