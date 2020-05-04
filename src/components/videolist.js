import React, { Component } from 'react'
import VideoItem from './VideoItem'

const VideoList =(props)=>{
   const renderedList= props.videos.map((video)=>{
        return <VideoItem key= {video.id.videoId } onVideoSelect={props.onVideoSelect} vid= {video} />
    })
return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList