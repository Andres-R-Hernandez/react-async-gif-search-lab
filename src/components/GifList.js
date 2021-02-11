import React, { Component } from 'react'

export default class GifList extends Component {    
    renderGif = (gifURL) => {
        return <li><img src={gifURL} alt="gif"></img></li>
    }
    
    render() {
        return (
            <ul>
                {this.props.listOfGifs.map(gifURL=>this.renderGif(gifURL))}
            </ul>
        )
    }
}
