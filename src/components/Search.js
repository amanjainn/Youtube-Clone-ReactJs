import React, { Component } from 'react'

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
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
