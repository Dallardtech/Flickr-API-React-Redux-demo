import * as types from './actionTypes';

export function getPhotosSuccess(photos) {
    return {
        type: types.GET_POSTS_SUCCESS,
        photos
    };
}

export function getPaginationInfoSuccess(pagination) {
    return {
        type: types.GET_PAGINATION_INFO_SUCCESS,
        pagination
    };
}

export function clearPostsSuccess() {
    return {
        type: types.CLEAR_POSTS_SUCCESS
    };
}

export function setLoadingSuccess(loading) {
    return {
        type: types.SET_LOADING_SUCCESS,
        loading
    };
}


