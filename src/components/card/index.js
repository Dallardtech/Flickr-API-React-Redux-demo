import React, { Component } from 'react'
import classNames from 'classnames'
import Waypoint from 'react-waypoint'
import { Link } from 'react-router'
import style from './style.scss'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inView: false
        }
    }

    _inView() {
        this.setState({inView: true});
    }

    render() {

        let classes = classNames({
            'card': true,
            'in-view': this.state.inView,
        });

        return (
            <div className={classes}>
                <Waypoint onEnter={this._inView.bind(this)}/>
                <div className="inner">
                    <div className="image">
                        <Link to={`https://www.flickr.com/photos/${this.props.photo.owner}/${this.props.photo.id}`} target="_blank">
                            <img src={`https://farm${this.props.photo.farm}.staticflickr.com/${this.props.photo.server}/${this.props.photo.id}_${this.props.photo.secret}.jpg`} alt=""/>
                        </Link>
                    </div>
                    <h2><Link to={`https://www.flickr.com/photos/${this.props.photo.owner}/${this.props.photo.id}`} target="_blank">{this.props.photo.title}</Link></h2>
                    <div className="user-link">
                        by <Link to={`https://www.flickr.com/people/${this.props.photo.owner}`} target="_blank"><i className="fa fa-user-o"></i> {this.props.photo.ownername}</Link>
                    </div>
                    {this.props.photo.description._content &&
                        <p className="description">{this.props.photo.description._content}</p>
                    }
                    <div className="tags">
                        <p><i className="fa fa-tags"></i> &nbsp;{this.props.photo.tags.replace(" ", ", ")}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card

