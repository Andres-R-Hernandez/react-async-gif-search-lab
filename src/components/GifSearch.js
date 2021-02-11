import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Enter Search Term</h3>
                <form onSubmit={this.props.fetchGifs}>
                    <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}
