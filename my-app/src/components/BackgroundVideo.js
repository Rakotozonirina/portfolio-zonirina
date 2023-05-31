import React from 'react';
import '../styles/BackgroundVideo.css';
import Video from '../assets/video/my-fond-light.mp4';
import Navbar from './Navbar';
const BackgroundVideo = () => {
return (
    <main>
        <Navbar/>
        <video autoPlay loop muted>
            <source src={Video} type='video/mp4' />
        </video>
    </main>
)
}

export default BackgroundVideo;
