import constants from './constants';
import rootReducer from './reducers';
import { createStore } from 'redux';
import * as actions from './actions';
import characterChangeReducer from './reducers/characterChangeReducer'

describe ('Character App', () => {
    const {initialState, types} = constants;
    const store = createStore(rootReducer, initialState);

    describe('characterReducer', () => {
        it('should show initial state', () =>{
            expect(characterChangeReducer(initialState, {type: null})).toEqual(initialState);
        })
        it('should change the character view', () => {
            expect(characterChangeReducer(initialState.currentCharacterCount, actions.nextHero(2))).toEqual(2)
        })
    })
})