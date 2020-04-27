import React, { Component } from 'react';
export default class TaskForm extends Component{
    state = {
        title: '',
        description:''
    }
    
    onSubmit = e =>{
       // console.log('submiting...')
        e.preventDefault();
    }
    onChange = e => {
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    render() {
        this.props.addTask("marcelo","cardenas");
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    name="title"
                    placeholder="Write Task" 
                    onChange={ this.onChange} 
                    value={this.state.title} 
                />
                <br/>
                <br/>
                <textarea 
                name="description"
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description} 
                />
                <input type="submit" />
            </form>
        )
    }
}