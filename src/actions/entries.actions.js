
const types = {
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRIES_DETAILS: 'POPULATE_ENTRIES_DETAILS',
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT'
}
export default types

export const addEntryRedux = (payload) => {
    return {type: types.ADD_ENTRY, payload}
}