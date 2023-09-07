import {take, call, put, fork} from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions'
import axios from 'axios'

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('entriesSaga')
    const {data} = yield call (axios, 'http://localhost:3002/entries')
    console.log('entriesSaga',data)
}