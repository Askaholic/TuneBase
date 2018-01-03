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

    private _idCounter: number = 0;

    constructor(protected store: Store<TuneListState>) { }

    ngOnInit() {
        this.tuneListState = this.store.select('tunes');
        this.store.dispatch(new TuneActions.GetTunes());
        let tuneList = []
        for (let i = 0; i < 10; i ++) {
            tuneList.push(this._makeTune());
        }
        this.store.dispatch(new TuneActions.GetTunesSuccess(tuneList))
    }

    private _makeTune() {
        this._idCounter++;
        return new Tune(
            this._idCounter.toString(),
            "Riding on a load of Hay",
            '',
            'Emin',
            'E>F GA|Be ef/2e/2|dB AG|FD DF|nE>F GA|Be ee/2f/2|g/2f/2e B^d|e2 e2:|\n|:e2 ee/2f/2|g/2f/2e fd|eB B>^c|dB AG|\nFD De/2f/2|g/2f/2e fd|eB B>^c|dB AF|\nE2 Ee/2f/2|g/2f/2e fd|eB B>^c|dB AG|\nFD DF|EG FA|GB ee/2f/2|1 g/2f/2e B^d:|2 g/2f/2e af|| ')
    }

}
