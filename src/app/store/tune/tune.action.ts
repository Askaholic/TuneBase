// tune.action.ts
// Rohan Weeden
// Created: Jan. 2, 2018

// NGRX Actions for modifying tune object state

import { Action } from '@ngrx/store';

import { Tune } from '../../models/tune.model';
import { TuneState } from './tune.state';

export const GET_TUNES = '[Tune] GET_TUNES';
export const GET_TUNES_SUCCESS = '[Tune] GET_TUNES_SUCCESS';
export const GET_TUNES_ERROR = '[Tune] GET_TUNES_ERROR';


export class GetTunes implements Action {
    readonly type = GET_TUNES;
}

export class GetTunesSuccess implements Action {
    readonly type = GET_TUNES_SUCCESS;

    constructor(public payload: Tune[]) {}
}

export class GetTunesError implements Action {
    readonly type = GET_TUNES_ERROR
}


export type All = GetTunes | GetTunesSuccess | GetTunesError;
