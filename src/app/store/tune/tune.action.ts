// tune.action.ts
// Rohan Weeden
// Created: Jan. 2, 2018

// NGRX Actions for modifying tune object state

import { Action } from '@ngrx/store';

import { Tune } from '../../models/tune.model';
import { TuneState } from './tune.state';

export const GET_TUNE = '[Tune] GET_TUNE';
export const GET_TUNE_SUCCESS = '[Tune] GET_TUNE_SUCCESS';
export const GET_TUNE_ERROR = '[Tune] GET_TUNE_ERROR';

export const GET_TUNES = '[Tune] GET_TUNES';
export const GET_TUNES_SUCCESS = '[Tune] GET_TUNES_SUCCESS';
export const GET_TUNES_ERROR = '[Tune] GET_TUNES_ERROR';


export class GetTune implements Action {
    readonly type = GET_TUNE;

    constructor(payload: string) {}
}

export class GetTuneSuccess implements Action {
    readonly type = GET_TUNE_SUCCESS;

    constructor(public payload: Tune) {}
}

export class GetTuneError implements Action {
    readonly type = GET_TUNE_ERROR
}


export class GetTunes implements Action {
    readonly type = GET_TUNES;
}

export class GetTunesSuccess implements Action {
    readonly type = GET_TUNES_SUCCESS;

    constructor(public payload: Tune[]) {}
}

export class GetTunesError implements Action {
    readonly type = GET_TUNE_ERROR
}


export type All = GetTune | GetTuneSuccess | GetTuneError |
                  GetTunes | GetTunesSuccess | GetTunesError;
