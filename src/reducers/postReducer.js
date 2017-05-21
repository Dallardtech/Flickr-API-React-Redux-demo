import * as types from '../actions/actionTypes';

const initialState = {
    loading: true,
    photos: [],
    pagination:  {
        page: 1,
        pages: 0,
        total: 0
    }
};

const postReducer = function(state = initialState, action) {

    switch(action.type) {
        case types.GET_POSTS_SUCCESS:
            return Object.assign({}, state, { photos: state.photos.concat(action.photos) });
    }

    switch(action.type) {
        case types.CLEAR_POSTS_SUCCESS:
            return Object.assign({}, state, { photos: initialState.photos });
    }

    switch(action.type) {
        case types.GET_PAGINATION_INFO_SUCCESS:
            return Object.assign({}, state, { pagination: action.pagination });
    }

    switch(action.type) {
        case types.SET_LOADING_SUCCESS:
            return Object.assign({}, state, { loading: action.loading });
    }

    return state;

};

export default postReducer;