import React from 'react';
import './VideoItem.css';

const VideoListItem = ({video, onVideoSelect}) => {
	return(
		<li onClick={() => onVideoSelect(video)} className="video-item">
        <img className="media-object" 
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="media-heading">{video.snippet.title}</div>
		</li>
	);
}

export default VideoListItem;