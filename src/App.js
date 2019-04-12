import React, { Component } from 'react';
import './App.css';
import YTSearch from './apis/youtubeSearch';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
	}
	
	componentDidMount(){
		this.videoSearch('flowers');
	}

  render() {
    if(this.state.videos.length === 0) {
			return <div>Loading...</div>;
		}
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onSearchTermChange={this.videoSearch} />
        </header>
				<div className="App-body">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList
						onVideoSelect={selectedVideo => this.setState({selectedVideo})}
						videos={this.state.videos}/>
				</div>
      </div>
    );
  }

	videoSearch(term){
		YTSearch.get(`/search?part=snippet&q=${term}`)
			.then(response => {
				this.setState({
					videos: response.data.items,
					selectedVideo: response.data.items[0]
				})
			}).catch(err => {
				console.error(err);
			});
	}
}

export default App;
