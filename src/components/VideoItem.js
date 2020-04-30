import React from 'react';
import './Videoitem.css'

const VideoItem =props =>{
    
return (
<div onClick={()=>props.onVideoSelect(props.vid)} className="video-item item">
    <img className="ui image" src = {props.vid.snippet.thumbnails.medium.url}/>
    <div className="content">
<div className="header">  {props.vid.snippet.title} </div>
</div>
</div>
    )
}


export default VideoItem;