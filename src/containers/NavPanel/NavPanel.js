import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import NoteList from  '../NoteList/NoteList'
import './NavPanel.css'

class NavPanel extends Component {
  
  constructor({onActiveNoteChange, onSearchFieldChange, onSearchClick}) {
    super();
    this.onActiveNoteChange = onActiveNoteChange
    this.onSearchFieldChange = onSearchFieldChange
    this.onSearchClick = onSearchClick
  }

  render() {
    const {repositories} = this.props
    return (
      <div className='w-third navpanel br b--black-20'>
      	<SearchBar 
          onSearchClick={this.onSearchClick}
          onSearchFieldChange={this.onSearchFieldChange}/>

        <NoteList 
          onActiveNoteChange={this.onActiveNoteChange}
          repositories={repositories}/>
      </div>
    );
  }
}

export default NavPanel;