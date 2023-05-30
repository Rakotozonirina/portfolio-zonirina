import React from 'react';
import '../styles/BackgroundVideo.css';
import Video from '../assets/video/my-fond-light.mp4';
const BackgroundVideo = () => {
return (
    <main>
        <video autoPlay loop muted>
            <source src={Video} type='video/mp4' />
        </video>
    </main>
)
}

export default BackgroundVideo;
