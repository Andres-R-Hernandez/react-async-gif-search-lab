import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends Component {
    state = {
        listOfGifs: [],
    }
      
    fetchGifs = (e) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.searchTerm.value}&api_key=B0mbleJzi74H7L9csaotrxg4ZBvzyfhF&rating=g`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                listOfGifs: data.data.slice(0, 3).map(gif=>gif.images.original.url)
            })
        })
    }
    
    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList listOfGifs={this.state.listOfGifs}/>
            </div>
        )
    }
}
