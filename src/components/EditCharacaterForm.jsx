import React, { useState } from 'react'
import { connect } from 'react-redux';
import uuid from 'uuid'

export default function EditCharacterForm(props) {
    return (<div key={characterId}>
        <h1>
            <input onChange={event => setName(event.target.value)}></input>
        </h1>
        <h2>
            <input onChange={event => setLevel(event.target.value)}></input>
        </h2>
        <h2>
            <input onChange={event => setRace(event.target.value)}></input>
        </h2>
        <h2>
            <input onChange={event => setJob(event.target.value)}></input>
        </h2>

        {character.items.map(item =>
            <li key={item}><input defaultValue={item} onChange={event => setItems(event.target.value)}></input> </li>)}
        <button onClick={() => props.dispatch({ type: 'DELETE_CHARACTER', id: characterId })}>Delete</button>
        <button onClick={() => {
            handeEditNewCharacter(props.dispatch)
            console.log(characterId)
            setEditing(null);
        }}>Submit</button>
    </div>
    )
}