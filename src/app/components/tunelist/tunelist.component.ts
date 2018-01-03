import { Component, OnInit } from '@angular/core';

import { Tune } from '../../models/tune.model';

import { Store } from '@ngrx/store';
import { TuneListState, TuneState } from '../../store/tune/tune.state';
import * as TuneActions from '../../store/tune/tune.action';


@Component({
  selector: 'app-tunelist',
  templateUrl: './tunelist.component.html',
  styleUrls: ['./tunelist.component.scss']
})
export class TunelistComponent implements OnInit {

    protected tuneListState: Store<Tune[]>;

    constructor(protected store: Store<TuneListState>) { }

    ngOnInit() {
        this.tuneListState = this.store.select('tunes');
        this.store.dispatch(new TuneActions.GetTunes());
    }

}
