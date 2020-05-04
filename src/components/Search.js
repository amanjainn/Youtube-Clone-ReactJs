import React, { Component } from 'react'
import './Videoitem.css'
import Logo from '../images/logo.jpg';

export default class Search extends Component {

    state= { term : ''}


    onInputChange =(event)=>{
        this.setState({term:event.target.value});
    }
    
    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    


    render() {
        return (
            <div className="ui fluid action input">
                <form onSubmit={this.onFormSubmit} className="ui form head">
                <img className="logo-img" src = {Logo}/>
                    <div className="search-bar">
                    
                        <input size="60" type="text" className="item1" value={this.state.term}
                        onChange={this.onInputChange}
                        />
                         <div class="ui button item2" onClick={this.onFormSubmit}>Search</div>
                        </div>
                </form>
            </div>
        )
    }
}

// <div class="ui fluid action input">
//   <input type="text" placeholder="Search...">

// </div>
