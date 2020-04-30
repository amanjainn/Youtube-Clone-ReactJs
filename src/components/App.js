import React, { Component } from 'react'
import Search from './Search'
import youtube from '../apis/youtube'
import VideoList from './videolist'

 
const  key='AIzaSyDbtnUi7Mm0NkobSIPSpKRrTrfpFXHYisI'
export default class App extends Component {
    state= { videos : []};

    onTermSubmit = async term => {
        const response=await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 25,
            key: key
          }
        });
        this.setState({videos: response.data.items})
    }

 onVideoSelect =(video)=>{
     console.log('From the App!',video)
 }

    render() {
        return (
            <div className="ui container">
           <Search onFormSubmit={this.onTermSubmit}/>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}
