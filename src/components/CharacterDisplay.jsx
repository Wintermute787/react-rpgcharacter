import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nextHero } from '../actions';






const CharacterDisplay = (props) => {
    const keys = Object.keys(props.characterList);
    const [editing, setEditing] = useState(null);

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [level, setLevel] = useState("");
    const [items, setItems] = useState("");
    const [race, setRace] = useState("");

    function handeEditNewCharacter(dispatch) {

        dispatch({
            type: 'EDIT_CHARACTER',
            id: editing,
            name: name,
            job: job,
            level: level,
            race: race,
            items: items.split(',')
        })
    }

    return (<div>
        {keys.map(characterId => {
            let character = props.characterList[characterId];
            return editing !== characterId ?
                <div key={characterId}>
                    <h1>
                        {character.name}
                    </h1>
                    <h2>{character.level}</h2>
                    <h2>{character.race}</h2>
                    <h2>{character.job}</h2>
                    {character.items.map(item =>
                        <li key={item}>{item}</li>)}
                    <button className='editButton' onClick={() => {
                        setEditing(characterId)
                        setName(character.name)
                        setJob(character.job)
                        setLevel(character.level)
                        setItems(character.items)
                        setRace(character.race)
                    }}>Edit</button>
                </div>
                :
                <div key={characterId}>
                    <h1>
                        <input defaultValue={name} onChange={event => setName(event.target.value)}></input>
                    </h1>
                    <h2>
                        <input defaultValue={job} onChange={event => setLevel(event.target.value)}></input>
                    </h2>
                    <h2>
                        <input defaultValue={level} onChange={event => setRace(event.target.value)}></input>
                    </h2>
                    <h2>
                        <input defaultValue={race} onChange={event => setJob(event.target.value)}></input>
                    </h2>

                    <textarea defaultValue={items} onChange={event => setItems(event.target.value)}></textarea>
                    <button onClick={() => props.dispatch({ type: 'DELETE_CHARACTER', id: characterId })}>Delete</button>
                    <button onClick={() => {
                        handeEditNewCharacter(props.dispatch)
                        console.log(characterId)
                        setEditing(null);
                    }}>Submit</button>
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