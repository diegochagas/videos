import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};
	}

	render(){
		return (
			<form className="search-bar" onSubmit={this.onSearchSubmit}>
				<input value={this.state.term}
					onChange={event => this.setState({term: event.target.value})}
          placeholder="Search video" />
			</form>
		);
	}
  
  onSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;