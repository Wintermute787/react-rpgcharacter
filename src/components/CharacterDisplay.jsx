import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {nextHero} from '../actions';


const CharacterDisplay = (props) => {
    const keys = Object.keys(props.characterList);
    return (<div>           
            {keys.map(characterId => {
                let character = props.characterList[characterId];                 
                return <div key={characterId}>
                <h1>
                 {character.name}
                </h1>
                <h2>{character.level}</h2>
                {character.items.map(item =>
                    <li key={item}>{item}</li> )}
                    <button onClick={() => props.dispatch({type: 'DELETE_CHARACTER', id: characterId})}>Delete</button>
                    
                </div>
                
            })}
            
        </div>)
}

 CharacterDisplay.propTypes = {
   characterList: PropTypes.object,
   dispatch: PropTypes.func
}

const mapStateToProps = state => {
    return {
        characterList: state.characterById
    }
}

export default connect(mapStateToProps)(CharacterDisplay);