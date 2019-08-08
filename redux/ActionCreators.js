import * as ActionTypes from './ActionTypes';

export const addComment = (projectId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        projectId: projectId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const postFavorite = (dishId)  => (dispatch) => {

    setTimeout(() => {
        dispatch(addFavorite(dishId));
    }, 2000);
};


export const addFavorite = (dishId) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: dishId
})