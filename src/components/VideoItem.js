import React from 'react';
import './VideoItem.css';

const VideoListItem = ({video, onVideoSelect}) => {
	return(
		<div onClick={() => onVideoSelect(video)} className="video-item">
      <img className="media-object" 
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="video-title">{video.snippet.title}</div>
		</div>
	);
}

export default VideoListItem;