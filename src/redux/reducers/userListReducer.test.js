import eventListReducer from './eventListReducer';


describe('Testing eventListReducer', () => {
    test('Should have correct default state', () => {
        let action = {};
        expect(eventListReducer(undefined, action)).toEqual([]);
    })

    test('Should return action.payload', () => {
        let action = {type: 'SET_USER_EVENT_LIST', payload: {event: 'Tour'}}
        expect(eventListReducer([], action)).toEqual({event: 'Tour'})
    })
})