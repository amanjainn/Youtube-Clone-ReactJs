import React, { Component } from 'react'
import Search from './Search'
import youtube from '../apis/youtube'
import VideoList from './videolist'
import VideoDetail from './VideoDetail'

 
const  key='AIzaSyDbtnUi7Mm0NkobSIPSpKRrTrfpFXHYisI'
export default class App extends Component {
    state= { videos : [],selectedVideo: null};


    componentDidMount(){
        this.onTermSubmit('entertainments');
    }

    onTermSubmit = async term => {
        const response=await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 30,
            key: key
          }
        });
        this.setState({videos: response.data.items,selectedVideo:response.data.items[4]
        })
    }

 onVideoSelect =(video)=>{
   this.setState({selectedVideo:video});
 
}

    render() {
        return (
            <div className="ui container">
           <Search onFormSubmit={this.onTermSubmit}/>
           <div className="ui grid">
               <div className="ui row">
                 <div className="eleven wide column">  
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}
