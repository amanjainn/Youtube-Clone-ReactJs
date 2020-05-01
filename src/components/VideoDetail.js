import React from 'react'

 const VideoDetail=({video})=> {
   if(!video){
       return <div>Loading...</div>
   }

   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc}/>
            </div>

            <div className="ui segment">
        <h2 className="ui header">{video.snippet.title}</h2>
        
        <h4>{video.snippet.description}</h4>
        </div>
        </div>
    )
 }


export default VideoDetail;