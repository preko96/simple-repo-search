import React, { Component } from 'react';
import NavPanel from '../NavPanel/NavPanel'
import Panel from '../Panel/Panel'
import './App.css';

class App extends Component {

	constructor() {
		super()
		this.state = {
			searchTerm: '',
			repositories: [],
			activeRepoValue: null,
		}
	}

	onActiveNoteChange = (newActiveRepo) => {
		this.setState({activeRepoValue: newActiveRepo.repoValue})
		console.log(newActiveRepo.repoValue);
	}

	onSearchFieldChange = (event) => {
	    this.setState({searchTerm: event.target.value})
	}

	onSearchClick = (event) => {
	 	const {searchTerm} = this.state

		let endpoint = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + searchTerm;
		fetch(endpoint)
		   	.then(blob => blob.json())
		    .then(response => {
		       	if(response.items)
		       		this.setState({ repositories: response.items })
		    })
	}

  	render() {
  		const {repositories, activeRepoValue} = this.state
	    return (
	    	<div className='flex items-start'>
	      		<NavPanel 
	      			onActiveNoteChange={this.onActiveNoteChange} 
	      			onSearchFieldChange={this.onSearchFieldChange}
	      			onSearchClick={this.onSearchClick}
	      			repositories={repositories}/>
	      		
	      		{
	      			activeRepoValue ? <Panel activeRepo={activeRepoValue}/> : <div></div>
	      		}
	      	</div>
	    );
    }
}

export default App;
