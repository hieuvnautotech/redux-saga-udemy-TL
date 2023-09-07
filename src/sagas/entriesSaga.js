import {take, call, put, fork} from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions'
import axios from 'axios'
import {populateEntries, populateEntryDetails} from '../actions/entries.actions'

//saga để lấy all list
export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('entriesSaga')
    const {data} = yield call (axios, 'http://localhost:3002/entries')
    console.log('entriesSaga',data)
    yield put(populateEntries(data))

}

// export function* getEntryDetails(id){
//     // console.log(`got the id ${id}`)
//     const {data} = yield call (axios, `http://localhost:3002/values/${id}`)
//     console.log(data)
//     yield put(populateEntryDetails(id, data))
//     // yield put({type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: {id, entry:data}})

// }

// export function* getAllEntriesDetails(){
//     const {payload} = yield take(entriesTypes.POPULATE_ENTRIES)
//     for(let index = 0; index<payload.length; index++){
//         const entry = payload[index]
//         yield fork(getEntryDetails, entry.id)
//     }
   
// }