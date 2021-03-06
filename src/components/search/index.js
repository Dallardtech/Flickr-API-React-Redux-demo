import React, { Component } from 'react'
import './style.scss'
import { getPosts, clearPosts } from '../../api/postApi'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            debounce: null,
            searchTerm: '',
            placeholder: "Tag search"
        };
    }

    _handleSearchTermChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            clearPosts();
            getPosts(1, this.state.searchTerm);
        }
    }

    render() {

        return (
            <div className="search">
                <i className="fa fa-search" />
                <input placeholder={this.state.placeholder} value={this.state.searchTerm} onKeyDown={this._handleKeyPress.bind(this)} onChange={this._handleSearchTermChange.bind(this)} />
            </div>
        )
    }
}

export default Search

