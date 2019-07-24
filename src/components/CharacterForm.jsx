import React, { useState } from 'react'
import { connect} from 'react-redux';
import uuid from 'uuid'

function CharacterForm(props) {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [level, setLevel] = useState("");
    const [items, setItems] = useState("");
    const [race, setRace] = useState("");
  


    return <div>
        <input onChange={event => setName(event.target.value)}></input>
        <input onChange={event => setJob(event.target.value)}></input>
        <input onChange={event => setLevel(event.target.value)}></input>
        <textarea onChange={event => setItems(event.target.value)}></textarea>
        <input onChange={event => setRace(event.target.value)}></input>
        <button onClick={handleNewTicketOnSubmission}>Submit</button>
    </div>
    function handleNewTicketOnSubmission() {
        const { dispatch} = props;
        dispatch({type: 'ADD_HERO',
            id: uuid.v4(),
            name: name,
            job: job,
            level: level,
            race: race,
            items: items.split(',')
            })
    }

}


export default connect()(CharacterForm);