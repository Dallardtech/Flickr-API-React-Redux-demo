import React, { Component } from 'react'
import { Link } from 'react-router'
import Search from '../Search'
import style from './style.scss'
import { getPosts, clearPosts } from '../../api/postApi'


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <Search />
                    <span className="app-label"><i className="fa fa-file-image-o"></i> &nbsp;React & Redux demo application</span>
                    <Link className="github-link" to="https://github.com/Dallardtech/Flickr-React-Redux-demo" target="_blank"><i className="fa fa-github"></i></Link>
                </div>
            </div>
        )
    }
}

export default Header;