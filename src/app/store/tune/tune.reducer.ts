// tune.reducer.ts
// Rohan Weeden
// Created: Jan 2. 2018

// NGRX Reducer for modifying tune object state

import { Tune } from '../../models/tune.model';
import { TuneState, TuneListState } from './tune.state';
import * as TuneActions from './tune.action';

export type Action = TuneActions.All;

const defaultState = {
    tunes: [],
    loading: false
}

export function TuneReducer(state = defaultState, action: Action) {
    switch (action.type) {
        case TuneActions.GET_TUNES: {
            return { ...state, loading: true};
        }
        case TuneActions.GET_TUNES_SUCCESS: {
            return {
                ...state,
                tunes: [
                    ...action.payload
                ],
                loading: false
            }
        }
    }
}
