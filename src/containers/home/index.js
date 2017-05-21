import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/card'
import Loader from '../../components/loader'
import Waypoint from 'react-waypoint';
import Pagination from "react-js-pagination";
import { getPosts, clearPosts } from '../../api/postApi'
import { pagingAmount, initialSearchTerm } from '../../config'
import style from './style.scss'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            activePage: 1,
            searchTerm: initialSearchTerm
        };
    }

    componentDidMount() {
        getPosts(this.props.pagination.page, this.state.searchTerm);
    }

    _setInView(page) {
        this.setState({activePage: page});
    }

    _loadMore() {
        if (!this.props.loading) {
            getPosts(this.props.pagination.page + 1, this.state.searchTerm);
        }
    }

    _handlePageChange(pageNumber) {
        clearPosts();
        getPosts(pageNumber, this.state.searchTerm);
        this.setState({activePage: pageNumber});
    }

    render() {

        const pages = this.props.photos.map(function (page, id) {
            const photos = page.photos.map(function (item, id) {
                return (
                    <Card
                        key={id}
                        photo={item}
                    />
                )
            }, this);
            return (
                <Waypoint key={id} onEnter={this._setInView.bind(this, page.page)}>
                    <div>
                        {photos}
                        <div className="clear"></div>
                    </div>
                </Waypoint>
            )
        }, this);

        return (
            <div>

                <div className="container">
                    <div className="row">
                        {pages}
                    </div>
                </div>

                { this.props.loading &&
                    <Loader text="LOADING IMAGES"/>
                }

                { !this.props.loading && this.state.activePage == this.props.pagination.pages &&
                    <div className="text-center">
                        <p>End of results</p>
                    </div>
                }

                { !this.props.loading && this.state.activePage < this.props.pagination.pages &&
                    <div className="waypoint-infinite">
                        <Waypoint onEnter={this._loadMore.bind(this)}/>
                    </div>
                }

                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={pagingAmount}
                    totalItemsCount={this.props.pagination.total}
                    onChange={::this._handlePageChange}
                />

            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        photos: store.postState.photos,
        pagination: store.postState.pagination,
        loading: store.postState.loading
    };
};

export default connect(mapStateToProps)(Home)