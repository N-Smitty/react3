import React, { Component } from 'react';

export default class Buttons extends Component {

    render() {

        return (

        <div className='allButtons'>

            <button className='prevButton' onClick={this.props.previous}>{`< Previous`}</button>

        <div className='more-buttons'>

            <button className='noClick'>Edit</button>

            <button className='noClick' onClick={this.props.delete}>Delete</button>

            <button className='noClick'>New</button>

        </div>

            <button className='nextButton' onClick={this.props.next}>Next > </button>

        </div>

        )

    }

}