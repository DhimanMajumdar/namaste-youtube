import React from 'react';

const VideoCard = ({info}) => {
    if (!info) {
        return <div>Loading...</div>; // or return null if you prefer
    }

    
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-60 shadow-slate-300 shadow-lg rounded-lg cursor-pointer '>
            <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'/>
            <ul>
                <li className='font-extrabold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
}

export default VideoCard;
