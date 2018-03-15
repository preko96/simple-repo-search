import React, { Component } from 'react';
import './Note.css'

class Note extends Component {
	constructor({repoValue, onActiveNoteChange}) {
		super();

		this.repoValue = repoValue

		this.onActiveNoteChange = () => onActiveNoteChange(this);
		this.state = {
			active: false,
			mouseover: false
		}
	}

	onMouseOverlap = () => {
		this.setState({mouseover: true})
	}

	onMouseLeave = () => {
		this.setState({mouseover: false})
	}

	render() {
		const {active, mouseover} = this.state;
		return(
			<div className='flex'>
				<div className={'ph1 pv4 b--black bg-black-20' + ((mouseover && !active ) ? ' bg-light-blue' : '') + (active ? ' bg-blue' : '')}></div>
				<div className=	{'pl4 pr3 note w-100 pv3 pointer' + ((mouseover && !active ) ? ' bg-washed-blue' : '') + (active ? ' bg-lightest-blue' : '')}
					onMouseOver={this.onMouseOverlap}
					onMouseOut={this.onMouseLeave}
					onClick={this.onActiveNoteChange}>
				
					<div className={'black-60 mb1' + (mouseover ? ' custom-grow' : '') + (active ? ' blue' : '')}>{this.repoValue.name}</div>
					<div className={'black-30' + (mouseover ? ' custom-grow' : '')}>{this.repoValue.description}</div>
				</div>
			</div>
		)
	}
}

export default Note;