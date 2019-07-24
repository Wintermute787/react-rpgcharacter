import constants from './../constants';
const {
    initialState,
} = constants;



const characterChangeReducer = (state = initialState, action) => {
    const {name, level, job, items, id, race } = action;
    switch (action.type) {
        case 'NEXT_HERO':
            return action.newSelectedHeroId;
        case 'ADD_HERO':
            return {...state, characterById: {...state.characterById, 
                [id]: {
                    name: name,
                    level: level,
                    job: job,
                    items: items,
                    id: id,
                    race: race
                }}}
            case 'DELETE_CHARACTER':
                let newCharacterById = {...state.characterById}
                delete newCharacterById[id]
                let newState = {...state, characterById: newCharacterById}
                return newState

            case 'EDIT_CHARACTER':
                return {...state, characterById: {...state.characterById,
                [id]: {
                    name: name,
                    level: level,
                    job: job,
                    items: items,
                    id: id,
                    race: race
                }}}
        default:
            return state
    }
}

export default characterChangeReducer