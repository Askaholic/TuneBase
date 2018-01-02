// tune.state.ts
// Rohan Weeden
// Created: Jan. 2, 2018

// NGRX State for a tune

import { Tune } from '../../models/tune.model';


export interface TuneState extends Tune {
    loading: boolean;
}

export interface TuneListState {
    tunes: Tune[];
    loading: boolean;
}
