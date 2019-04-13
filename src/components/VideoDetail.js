import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
	const videoTitle = video.snippet.title;
	return(
		<div className="video-detail">
			<div className="video-detail-column video-container">
				<iframe 
					title={videoTitle} 
					src={`https://www.youtube.com/embed/${video.id.videoId}`} >
				</iframe>
			</div>
			<div className="details video-detail-column">
				<div>{videoTitle}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetail;