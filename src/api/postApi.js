import store from '../store'
import { getPhotosSuccess, getPaginationInfoSuccess, clearPostsSuccess, setLoadingSuccess } from '../actions/postActions'
import { flickrApiKeys, pagingAmount } from '../config'
import axios from 'axios'

export function clearPosts() {
    store.dispatch(clearPostsSuccess());
}

export function getPosts(page, searchTerm) {

    store.dispatch(setLoadingSuccess(true));

    axios.get('https://api.flickr.com/services/rest', {
        params: {
            method: "flickr.photos.search",
            format: "json",
            nojsoncallback: "?",
            api_key: flickrApiKeys.key,
            per_page: pagingAmount,
            page: page,
            tags: searchTerm,
            extras: 'description,owner_name,tags'
        }
    }).then(function (response) {

        const paginateInfo = {
            page: page,
            pages: parseInt(response.data.photos.pages),
            total: parseInt(response.data.photos.total)
        };

        const pagedPhotos = {
            page: page,
            photos: response.data.photos.photo
        };

        store.dispatch(getPaginationInfoSuccess(paginateInfo));
        store.dispatch(getPhotosSuccess(pagedPhotos));
        store.dispatch(setLoadingSuccess(false));

    }).catch(function (error) {
        console.log(error);
    });

}