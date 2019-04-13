import React from 'react';
import './VideoList.css';
import VideoListItem from './VideoItem';

const VideoList = (props) => {
	const videoItems = props.videos.map(video => {
		return(
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video}/>);
	});

	return(
    <div className="video-list-container">
			{videoItems}
		</div>
	);
}

export default VideoList;