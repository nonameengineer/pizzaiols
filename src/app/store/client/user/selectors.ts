import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './state';

export const getUserState = createFeatureSelector<State>('user');

