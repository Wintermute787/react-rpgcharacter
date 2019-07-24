import * as types from './../constants/actionTypes';

export const nextHero = (newSelectedHeroId) => ({
    type: types.NEXT_HERO,
    newSelectedHeroId  
})