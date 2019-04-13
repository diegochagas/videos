import React from 'react';
import './VideoItem.css';

const VideoListItem = ({video, onVideoSelect}) => {
	return(
    <figure  onClick={() => onVideoSelect(video)} className="video-item">
      <img className="thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <figcaption className="video-title">{video.snippet.title}</figcaption>
    </figure>
	);
}

export default VideoListItem;