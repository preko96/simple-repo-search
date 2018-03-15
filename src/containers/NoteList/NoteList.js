import React, { Component } from 'react';
import Note from '../../components/Note/Note'

class NoteList extends Component {
	
	constructor({onActiveNoteChange}) {
		super()
		this.onActiveNoteChange = onActiveNoteChange
		this.state = {
			activeNote: null
		}
	}

	handleClick = (note) => {
		const {activeNote} = this.state

		if(!activeNote) {
			this.setState({activeNote: note})
			note.setState({'active': true})
		}

		else if (activeNote !== note) {
			activeNote.setState({active: false}) 
			note.setState({active: true})
			this.setState({activeNote: note})
		}

		this.onActiveNoteChange(note)
	}

	render() {
		const {repositories} = this.props

		return (
			<div style={{overflow: 'scroll', height: '100vh'}}>
				{
					repositories.map((repo) => {
					 	return <Note repoValue={repo} key={repo.id} onActiveNoteChange={ this.handleClick.bind(this) }/>
					})
				}
			</div>
		)
	}
}

export default NoteList;